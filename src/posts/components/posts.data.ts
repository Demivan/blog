import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default {
  watch: '../*.md',
  load(asFeed = false) {
    const postDir = path.resolve(__dirname, '../')
    return fs
      .readdirSync(postDir, { withFileTypes: true })
      .filter(data => data.isFile() && data.name !== 'index.md')
      .map(data => data.name)
      .map((file: string) => getPost(file, postDir, asFeed))
      .sort((a, b) => b.date.time - a.date.time)
  },
}

const cache = new Map()

function getPost(file: string, postDir: string, asFeed = false) {
  const fullePath = path.join(postDir, file)
  const timestamp = fs.statSync(fullePath).mtimeMs

  const cached = cache.get(fullePath)
  if (cached && timestamp === cached.timestamp)
    return cached.post

  const src = fs.readFileSync(fullePath, 'utf-8')
  const { data } = matter(src)

  const post = {
    title: data.title,
    href: `/posts/${file.replace(/\.md$/, '.html')}`,
    date: formatDate(data.date),
  }

  if (asFeed) {
    // only attach these when building the RSS feed to avoid bloating the
    // client bundle size
    post.data = data
  }

  cache.set(fullePath, {
    timestamp,
    post,
  })
  return post
}

function formatDate(date: number | string | Date) {
  if (!(date instanceof Date))
    date = new Date(date)

  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
