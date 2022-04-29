import { defineApp } from 'iles'

import 'windi.css'

import '~/styles/main.css'
import '~/styles/fonts.css'
import '~/styles/prose.css'
import '~/styles/markdown.css'

export default defineApp({
  socialTags: true,
  head: {
    meta: [
      { name: 'author', content: 'Ivan Demchuk' },
      { property: 'og:image', content: 'https://demivan.me/avatar.png' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@IvanDemchuk' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
    ],
    link: [
      { href: '/feed.xml', rel: 'alternate', title: 'Ivan Demchuk\'s Blog', type: 'application/rss+xml' },
      // { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' }
    ],

    script: process.env.NODE_ENV === 'production'
      ? [
        { 'defer': 'defer', 'src': 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "ac0b1366d5e54c43a78cfc2c56070cab"}' },
      ]
      : [],
  },
})
