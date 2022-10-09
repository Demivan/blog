<script setup lang="ts">
definePageMeta({
  title: 'Blog',
})

const posts = await queryContent('/posts').find()

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
  <Page>
    <ul>
      <NuxtLink
        v-for="post in posts"
        :key="post._id"
        class="item block font-normal mb-6 mt-2 no-underline"
        :to="post._path"
      >
        <li class="no-underline">
          <div class="title text-lg">
            {{ post.title }}
          </div>
          <div class="time opacity-50 text-sm -mt-1">
            {{ formatDate(post.date) }} <span v-if="post.duration" class="opacity-50">· {{ post.duration }}</span>
          </div>
        </li>
      </NuxtLink>
    </ul>
  </Page>
</template>
