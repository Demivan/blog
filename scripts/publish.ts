import execa from 'execa'
import chalk from 'chalk'
import { exit } from 'process'
import { readFileSync, writeFileSync } from 'fs'

let repoUrl
const pkgString = readFileSync('package.json')
const pkg = JSON.parse(pkgString.toString())
if (typeof pkg.repository === 'object') {
  if (!Object.prototype.hasOwnProperty.call(pkg.repository, 'url')) {
    throw new Error('URL does not exist in repository section')
  }
  repoUrl = pkg.repository.url
} else {
  repoUrl = pkg.repository
}

const parsedUrl = new URL(repoUrl)
const repository = (parsedUrl.host || '') + (parsedUrl.pathname || '')

const ghToken = process.env.GH_TOKEN

if (!ghToken) {
  console.error("No GH_TOKEN specified")
  exit(1)
}

function echo(text: string) {
  console.log(chalk.bold(chalk.yellow(text)))
}

async function publish() {
  echo('Publishing blog!!!')
  await execa('pnpm', ['i'], { cwd: '.', stdio: 'inherit' })
  await execa('pnpm', ['build'], { cwd: '.', stdio: 'inherit' })

  const options = { cwd: 'dist', stdio: 'inherit' }
  writeFileSync('dist/CNAME', 'www.demivan.me')
  await execa('git', ['init', '--initial-branch', 'main'], options)
  await execa('git', ['add', '.'], options)
  await execa('git', ['config', 'user.name', '"Ivan Demchuk"'], options)
  await execa('git', ['config', 'user.email', '"ivan.demchuk@gmail.com"'], options)
  await execa('git', ['commit', '-m', '"docs(docs): publish gh-pages"'], options)
  await execa('git', ['push', '--force', '--quiet', `https://${ghToken}@${repository}`, 'main:gh-pages'], options)

  echo('Blog deployed!!')
}

publish()
