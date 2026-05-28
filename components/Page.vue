<script setup lang="ts">
interface PageMeta {
  title?: string
  display?: string
  date?: string
  duration?: string
  subtitle?: string
}

const props = defineProps<{
  meta?: PageMeta
}>()

const route = useRoute()
const page = computed(() => ({ ...route.meta, ...props.meta }) as PageMeta)

useHead(() => ({
  title: page.value.display ?? `${page.value.title} · Ivan Demchuk `,
}))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const description = computed(() => {
  const parts: string[] = []
  if (page.value.date)
    parts.push(formatDate(page.value.date))
  if (page.value.duration)
    parts.push(page.value.duration)
  if (page.value.subtitle)
    return page.value.subtitle
  return parts.join(' · ') || undefined
})
</script>

<template>
  <UContainer>
    <UPageHeader
      v-if="page.display ?? page.title"
      :title="page.display ?? page.title"
      :description="description"
    />
    <article>
      <slot />
    </article>
    <div v-if="route.path !== '/' && route.path !== '/index.html'" class="mt-8 mb-8">
      <NuxtLink
        :to="route.path.split('/').slice(0, -1).join('/') || '/'"
        class="font-mono no-underline text-muted hover:text-default"
      >
        cd ..
      </NuxtLink>
    </div>
  </UContainer>
</template>
