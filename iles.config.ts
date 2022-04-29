import { defineConfig } from 'iles'

import WindiCSS from 'vite-plugin-windicss'

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
      '@islands/icons',
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
        WindiCSS({
          safelist: 'prose prose-sm m-auto sr-only'.split(' '),
          preflight: {
            enableAll: true,
          },
        }),
      ],
    },
  }
})
