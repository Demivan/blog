<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('posts').path(route.path).first())
</script>

<template>
  <Page :meta="page ?? undefined">
    <ContentRenderer v-if="page" :value="page" />
  </Page>
</template>
