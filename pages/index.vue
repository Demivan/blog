<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').path('/').first())

useHead({
  title: 'Ivan Demchuk',
})
</script>

<template>
  <UContainer>
    <UPageHeader :title="page?.title" />
    <article>
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </UContainer>
</template>
