<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all())

useHead({ title: 'Blog · Ivan Demchuk' })

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
  <div>
    <UPageHeader title="Blog" />
    <NuxtLink
      v-for="post in posts"
      :key="post.path"
      class="block mb-6 mt-2 opacity-60 hover:opacity-100 transition-opacity"
      :to="post.path"
    >
      <div class="text-lg">
        {{ post.title }}
      </div>
      <div class="opacity-50 text-sm -mt-1">
        {{ formatDate(post.date) }} <span v-if="post.duration" class="opacity-50">· {{ post.duration }}</span>
      </div>
    </NuxtLink>
  </div>
</template>
