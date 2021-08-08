<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { property: 'og:title', content: 'Ivan Demchuk' },
    { property: 'og:image', content: 'https://demivan.me/avatar.png' },
    { name: 'description', content: 'Ivan Demchuk\'s Blog' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@IvanDemchuk' },
  ],
})
</script>
