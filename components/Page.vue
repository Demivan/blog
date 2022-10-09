<script setup lang="ts">
interface Meta {
  title: string
  display?: string
  date?: string
  duration?: string
  subtitle?: string
}

const props = defineProps<{
  meta?: Meta
}>()

const route = useRoute()
const page = computed(() => props.meta ?? route.meta)

useHead(() => ({
  title: page.value.display ?? `${page.value.title} · Ivan Demchuk `,
}))

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
  <main class="px-7 py-10">
    <div v-if="page.display ?? page.title" class="prose m-auto mb-8">
      <h1 class="mb-0">
        {{ page.display ?? page.title }}
      </h1>
      <p v-if="page.date" class="opacity-50 !-mt-2">
        {{ formatDate(page.date) }} <span v-if="page.duration">· {{ page.duration }}</span>
      </p>
      <p v-if="page.subtitle" class="opacity-50 !-mt-6 italic">
        {{ page.subtitle }}
      </p>
    </div>
    <article>
      <div class="prose mx-auto">
        <slot />
      </div>
    </article>

    <div v-if="route.path !== '/' && route.path !== '/index.html'" class="prose m-auto mt-8 mb-8">
      <NuxtLink
        :to="route.path.split('/').slice(0, -1).join('/') || '/'"
        class="font-mono no-underline opacity-50 hover:opacity-75"
      >
        cd ..
      </NuxtLink>
    </div>
  </main>
</template>
