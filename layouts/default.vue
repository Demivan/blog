<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <UContainer>
    <slot />
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
