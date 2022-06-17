import { defineConfig } from 'iles'

import Unocss from 'unocss/vite'
import { presetWind, presetWebFonts, presetIcons } from 'unocss'

import { BUNDLED_LANGUAGES, getHighlighter } from 'shiki'

import FluentGrammar from './fluent.tmLanguage.json'

function visit(node: any, type: string, fn: (node: any) => void) {
  if (node.type === type)
    fn(node)

  if (node.children)
    node.children.forEach(child => visit(child, type, fn))
}

export default defineConfig(async() => {
  const highlighter = await getHighlighter({
    themes: [
      'material-palenight',
    ],
    langs: [
      ...BUNDLED_LANGUAGES, {
        id: 'ftl',
        scopeName: 'source.ftl',
        grammar: FluentGrammar,
      },
    ],
  })

  return {
    siteUrl: 'https://demivan.me',
    modules: [
      '@islands/feed',
      '@islands/headings',
    ],
    markdown: {
      remarkPlugins: [
        () => {
          function transformer(tree) {
            visit(tree, 'code', visitor)

            function visitor(node) {
              const highlighted = highlighter.codeToHtml(node.value, {
                lang: node.lang,
                theme: 'material-palenight',
              })

              node.type = 'html'
              node.value = highlighted
            }
          }

          return transformer
        },
      ],
    },
    vite: {
      plugins: [
        Unocss({
          safelist: 'prose prose-sm m-auto sr-only'.split(' '),
          presets: [
            presetWind(),
            presetWebFonts({
              provider: 'none',
              fonts: {
                sans: '"Inter", Inter var,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
                mono: 'Fira Code'
              },
            }),
            presetIcons({
              collections: {
                logo: {
                  'fluent-vue': `<svg xmlns="http://www.w3.org/2000/svg" width="522" height="453" viewBox="0 0 522 453"><path fill="#41B883" d="M517 5H414.6L209.8 359.4 261 448 517 5" /><path fill="#34495E" d="m5 5 204.8 354.4 51.2-88.6-34.083-58.979h34.095l51.235-88.661H175.682l-17.047-29.499h170.659L380.529 5H5" /></svg>`
                }
              }
            }),
          ]
        })
      ],
    },
  }
})
