import { defineConfigWithTheme, UserConfig } from 'vitepress'

import { resolve } from 'path'

import anchor from 'markdown-it-anchor'
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'

import FluentGrammar from './fluent.tmLanguage.json'

export default defineConfigWithTheme(async() => {
  const highlighter = await getHighlighter({
    theme: 'material-palenight',
    langs: [
      ...BUNDLED_LANGUAGES, {
        id: 'ftl',
        scopeName: 'source.ftl',
        grammar: FluentGrammar,
      },
    ],
  })
  
  return <UserConfig<any>>{
    outDir: resolve('dist/'),
    markdown: {
      anchor: {
        permalink: anchor.permalink.headerLink({
          safariReaderFix: true,
        })
      },
      highlight: (str, lang, attrs) => {
        return highlighter.codeToHtml(str, { lang, theme: 'material-palenight' })
      }
  }
})
