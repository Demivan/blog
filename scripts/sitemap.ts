import { dirname } from 'path'
import execa from 'execa'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import { SitemapStream, SitemapItemLoose } from 'sitemap'

const DOMAIN = 'https://demivan.me'

/**
 * Get unix timestamp in milliseconds of the last commit
 */
export const getUpdatedTime = async (
  filePath: string,
  cwd: string
): Promise<number> => {
  const { stdout } = await execa(
    'git',
    ['--no-pager', 'log', '-1', '--format=%at', filePath],
    {
      cwd,
    }
  )

  return Number.parseInt(stdout, 10) * 1000
}

async function run() {
  const stream = new SitemapStream({
    hostname: DOMAIN
  })

  stream.write({
    url: '/projects',
    changefreq: 'weekly',
  })

  await buildBlogSitemap(stream)
  await buildNotesSitemap(stream)

  await writeSitemap(stream)
}

async function buildBlogSitemap(stream: SitemapStream) {
  const files = await fg('pages/posts/*.md')

  const posts: SitemapItemLoose[] = (
    await Promise.all(
      files.filter(i => !i.includes('index'))
        .map(async(i) => {
          const raw = await fs.readFile(i, 'utf-8')
          const { data } = matter(raw)

          if (data.lang !== 'en')
            return

          if (data.image?.startsWith('/'))
            data.image = DOMAIN + data.image

          const sitemapItem: SitemapItemLoose = {
            url: i.replace(/.md$/, '').replace(/^pages/, ''),
            lastmodISO: new Date(await getUpdatedTime(i, '.')).toISOString(),
            changefreq: 'weekly',
            ...data
          }

          return sitemapItem
        }),
    ))
    .filter(Boolean)

  for (const post of posts) {
    stream.write(post)
  }
}

async function buildNotesSitemap(stream: SitemapStream) {
  // TODO: Implement after org-roam is intergrated
}

async function writeSitemap(stream: SitemapStream) {
  const path = `./dist/sitemap.xml`
  await fs.ensureDir(dirname(path))

  stream.pipe(fs.createWriteStream(path)).on('error', e => { throw e })
  stream.end()
}

run()
