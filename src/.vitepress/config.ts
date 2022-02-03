import { defineConfigWithTheme, UserConfig } from 'vitepress'

import { resolve } from 'path'

import anchor from 'markdown-it-anchor'
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import WindiCSS from 'vite-plugin-windicss'

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
    },
    title: 'Ivan Demchuk',
    description: 'Ivan Demchuk\'s Blog',
    head: [
      ['meta', { name: 'author', content: 'Ivan Demchuk' }],
      ['link', { href: '/feed.xml', rel: 'alternate', title: 'Ivan Demchuk\'s Blog', type: 'application/rss+xml' }],
      ['meta', { property: 'og:title', content: 'Ivan Demchuk' }],
      ['meta', { property: 'og:image', content: 'https://demivan.me/avatar.png' }],
      ['meta', { name: 'revisit-after', content: '7 days' }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:creator', content: '@IvanDemchuk' }],
      // ['link', { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
      ...process.env.NODE_ENV === 'production' ? [
        ['script', { defer: 'defer', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "ac0b1366d5e54c43a78cfc2c56070cab"}' }],
      ] : []
    ],
    vite: {
      define: {
        __VUE_OPTIONS_API__: false
      },
      resolve: {
        alias: {
          '@': resolve('./src/')
        }
      },
      plugins: [
        Components({
          extensions: ['vue', 'md', 'ts'],
          dts: true,
          include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
          resolvers: [
            IconsResolver({
              componentPrefix: '',
            }),
          ],
        }),

        Icons(),

        WindiCSS({
          config: resolve('./src/.vitepress/windicss.config.ts'),
          safelist: 'prose prose-sm m-auto sr-only'.split(' '),
          preflight: {
            enableAll: true,
          },
        }),
      ]
    }
  }
})
