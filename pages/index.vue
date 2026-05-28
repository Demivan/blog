<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').path('/').first())

useHead({ title: 'Ivan Demchuk' })
</script>

<template>
  <div>
    <UPageHeader :title="page?.title" />
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
