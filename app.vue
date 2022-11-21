<script setup>
import '@unocss/reset/tailwind.css'
import 'uno.css'

import '~/assets/styles/main.css'
import '~/assets/styles/fonts.css'
import '~/assets/styles/prose.css'
import '~/assets/styles/markdown.css'

const route = useRoute()
const meta = route.meta

useHead({
  title: meta.display ?? `${meta.title} · Ivan Demchuk `,
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>
