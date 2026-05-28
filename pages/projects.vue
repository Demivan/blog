<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () =>
  queryCollection('content').path('/projects').first())

useHead({ title: 'Projects · Ivan Demchuk' })
</script>

<template>
  <div>
    <UPageHeader title="Projects" description="List of projects I'm working on" />
    <ContentRenderer v-if="page" :value="page" />
    <div class="mt-8 mb-8">
      <NuxtLink to="/" class="font-mono no-underline text-muted hover:text-default">
        cd ..
      </NuxtLink>
    </div>
  </div>
</template>
