import { defineConfig } from 'iles'

import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  siteUrl: 'https://demivan.me',
  modules: [
    '@islands/feed',
    '@islands/icons',
    '@islands/headings',
  ],
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
})
