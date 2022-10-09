<script setup lang="ts">
const { page } = useContent()
</script>

<template>
  <Page :meta="page">
    <ContentRenderer v-if="page" :key="page._id" :value="page">
      <template #empty="{ value }">
        <DocumentDrivenEmpty :value="value" />
      </template>
    </ContentRenderer>
    <DocumentDrivenNotFound v-else />
  </Page>
</template>
