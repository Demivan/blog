<page>
title: Blog
</page>

<script setup lang="ts">
const posts = useDocuments('~/pages/posts')

function formatDate(date: number | string | Date) {
  if (!(date instanceof Date))
    date = new Date(date)

  date.setUTCHours(12)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <ul>
    <a
      v-for="post in posts"
      :key="post.href"
      class="item block font-normal mb-6 mt-2 no-underline"
      :href="post.href"
    >
      <li class="no-underline">
        <div class="title text-lg">
          {{ post.title }}
        </div>
        <div class="time opacity-50 text-sm -mt-1">
          {{ formatDate(post.date) }} <span v-if="post.duration" class="opacity-50">· {{ post.duration }}</span>
        </div>
      </li>
    </a>
  </ul>
</template>
