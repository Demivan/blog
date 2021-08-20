import { resolve } from 'path'
import { UserConfig } from 'vite'
import fs from 'fs-extra'
import Pages from 'vite-plugin-pages'
import PurgeIcons from 'vite-plugin-purge-icons'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Vue from '@vitejs/plugin-vue'
import Shiki from 'markdown-it-shiki'
import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'
import matter from 'gray-matter'
import WindiCSS from 'vite-plugin-windicss'
import anchor from 'markdown-it-anchor'
// @ts-expect-error
import markdownAttr from 'markdown-it-link-attributes'

import FluentGrammar from './fluent.tmLanguage.json'
import { slugify } from './scripts/slugify'

const config = async (): Promise<UserConfig> => {
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

  return {
    resolve: {
      alias: [
        { find: '/~/', replacement: `${resolve(__dirname, 'src')}/` },
      ],
    },
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@iconify/iconify',
        'date-fns',
      ],
    },
    plugins: [
      Vue({
        include: [/\.vue$/, /\.md$/],
      }),

      Pages({
        extensions: ['vue', 'md'],
        pagesDir: 'pages',
        extendRoute(route) {
          const path = resolve(__dirname, route.component.slice(1))

          if (!path.includes('projects.md')) {
            const md = fs.readFileSync(path, 'utf-8')
            const { data } = matter(md)
            route.meta = Object.assign(route.meta || {}, { frontmatter: data })
          }

          return route
        },
      }),

      Markdown({
        wrapperComponent: 'post',
        wrapperClasses: 'prose m-auto',
        headEnabled: true,
        markdownItOptions: {
          quotes: '""\'\'',
        },
        markdownItSetup(md) {
          md.use(Shiki, {
            highlighter,
          })
          md.use(anchor, {
            slugify,
            permalink: anchor.permalink.ariaHidden({
              symbol: '#',
              placement: 'before',
            }),
          })

          md.use(markdownAttr, {
            pattern: /^https?:/,
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      ViteComponents({
        extensions: ['vue', 'md', 'ts'],
        globalComponentsDeclaration: true,
        customLoaderMatcher: path => path.endsWith('.md'),
        customComponentResolvers: ViteIconsResolver({
          componentPrefix: '',
        }),
      }),

      PurgeIcons(),
      Icons(),

      WindiCSS({
        safelist: 'prose prose-sm m-auto'.split(' '),
        preflight: {
          enableAll: true,
        },
      }),
    ],
  }
}

export default config
