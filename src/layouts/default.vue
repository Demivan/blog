<script setup lang="ts">
import { usePage, useRoute } from 'iles'

import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const { frontmatter } = usePage()

function formatDate(date: number | string | Date) {
  if (!(date instanceof Date))
    date = new Date(date)

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="font-sans text-gray-700 dark:text-gray-200">
    <NavBar />
    <main class="px-7 py-10">
      <div v-if="frontmatter.display ?? frontmatter.title" class="prose m-auto mb-8">
        <h1 class="mb-0">
          {{ frontmatter.display ?? frontmatter.title }}
        </h1>
        <p v-if="frontmatter.date" class="opacity-50 !-mt-2">
          {{ formatDate(frontmatter.date) }} <span v-if="frontmatter.duration">· {{ frontmatter.duration }}</span>
        </p>
        <p v-if="frontmatter.subtitle" class="opacity-50 !-mt-6 italic">
          {{ frontmatter.subtitle }}
        </p>
      </div>
      <article>
        <div class="prose mx-auto">
          <slot />
        </div>
      </article>

      <div v-if="route.path !== '/' && route.path !== '/index.html'" class="prose m-auto mt-8 mb-8">
        <a
          :href="route.path.split('/').slice(0, -1).join('/') || '/'"
          class="font-mono no-underline opacity-50 hover:opacity-75"
        >
          cd ..
        </a>
      </div>
      <Footer />
    </main>
  </div>
</template>
