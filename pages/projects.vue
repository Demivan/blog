<script setup lang="ts">
const { data: page } = await useAsyncData('projects', () =>
  queryCollection('content').path('/projects').first())
</script>

<template>
  <Page :meta="page ?? undefined">
    <ContentRenderer v-if="page" :value="page" />
  </Page>
</template>
