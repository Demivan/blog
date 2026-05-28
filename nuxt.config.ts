import { readFileSync } from 'node:fs'

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { 'defer': true, 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "ac0b1366d5e54c43a78cfc2c56070cab"}' },
      ],
      link: [
        { rel: 'webmention', href: 'https://webmention.io/demivan.me/webmention' },
        { rel: 'pingback', href: 'https://webmention.io/demivan.me/xmlrpc' },
      ],
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    classSuffix: '',
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'material-theme-lighter',
            dark: 'material-theme-palenight',
          },
          langs: [
            'js',
            JSON.parse(
              readFileSync('./fluent.tmLanguage.json', 'utf-8'),
            ),
          ],
        },
      },
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Fira Code', provider: 'google' },
    ],
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './public/icons',
      },
    ],
  },

  routeRules: {
    '/posts/2021-08-08-vue-i18n-in-real-world-application': { redirect: { to: '/posts/vue-i18n-difficulties', statusCode: 301 } },
    '/posts/vue-i18n-in-real-world-application': { redirect: { to: '/posts/vue-i18n-difficulties', statusCode: 301 } },
  },

  nitro: {
    preset: 'cloudflare-pages-static',
  },

  compatibilityDate: '2026-03-15',
})
