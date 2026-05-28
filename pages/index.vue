<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryCollection('content').path('/').first())

useHead({
  title: 'Ivan Demchuk',
})
</script>

<template>
  <main class="px-7 py-10">
    <div class="prose prose-lg m-auto mb-8">
      <h1 class="mb-0 text-4xl font-extrabold">
        {{ page?.title }}
      </h1>
    </div>
    <article>
      <div class="prose prose-lg mx-auto">
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </article>
  </main>
</template>
