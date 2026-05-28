<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Blog', to: '/posts', icon: 'i-ri-article-line' },
  { label: 'Projects', to: '/projects', icon: 'i-ri-lightbulb-line' },
]
</script>

<template>
  <UApp>
    <UHeader title="Ivan Demchuk" to="/">
      <template #left>
        <NuxtLink to="/" class="flex items-center" aria-label="Go to frontpage">
          <UIcon name="i-typcn-home" class="text-2xl" />
        </NuxtLink>
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UButton to="https://fosstodon.org/@Demivan" icon="i-ri-mastodon-line" color="neutral" variant="ghost" target="_blank" rel="me" aria-label="Mastodon" />
        <UButton to="https://github.com/demivan" icon="i-uil-github-alt" color="neutral" variant="ghost" target="_blank" rel="me" aria-label="GitHub" />
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain>
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <UFooter>
      <template #left>
        <span class="text-sm text-muted">
          <a rel="noopener" target="_blank" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a> 2021 © Ivan Demchuk
        </span>
      </template>
    </UFooter>
  </UApp>
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
