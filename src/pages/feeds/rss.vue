<page>
path: /feed.xml
</page>

<script setup lang="ts">
import type { FeedItem, FeedOptions } from '@islands/feed'
import type { Document } from 'iles'

const { site } = usePage()

const url = site.url

const options: FeedOptions = {
  title: site.title,
  description: site.description,
  id: url,
  link: url,
  copyright: 'CC BY-NC-SA 4.0 2021 © Ivan Demchuk',
}

const posts = $(useDocuments('~/pages/posts'))

const items = posts.map<FeedItem>((post: Document) => ({
  link: url + post.href,
  date: post.date,
  title: post.title,
  description: post.description,
  content: post,
}))
</script>

<template>
  <RenderFeed format="rss" :options="options" :items="items" />
</template>
