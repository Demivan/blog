<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first())

useHead(() => ({
  title: page.value?.title ? `${page.value.title} · Ivan Demchuk` : 'Ivan Demchuk',
}))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const description = computed(() => {
  if (!page.value)
    return undefined
  return [page.value.date && formatDate(page.value.date), page.value.duration].filter(Boolean).join(' · ')
})
</script>

<template>
  <div>
    <UPageHeader
      v-if="page"
      :title="page.title"
      :description="description"
    />
    <ContentRenderer v-if="page" :value="page" />
    <div class="mt-8 mb-8">
      <NuxtLink to="/posts" class="font-mono no-underline text-muted hover:text-default">
        cd ..
      </NuxtLink>
    </div>
  </div>
</template>
