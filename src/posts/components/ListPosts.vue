<script setup lang="ts">
import { data as posts } from './posts.data'
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
          {{ post.date.string }} <span v-if="post.duration" class="opacity-50">· {{ post.duration }}</span>
        </div>
      </li>
    </a>
  </ul>
</template>
