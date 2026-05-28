import { defineCollection, defineContentConfig } from '@nuxt/content'
import { array, object, optional, string } from 'valibot'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: object({
        title: string(),
        description: optional(string()),
        date: string(),
        lang: optional(string()),
        duration: optional(string()),
        keywords: optional(array(string())),
      }),
    }),
  },
})
