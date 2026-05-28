<script setup lang="ts">
import ToggleTheme from './ToggleTheme.vue'
</script>

<template>
  <header class="header text-black dark:text-white">
    <NuxtLink
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      to="/"
      focusable="false"
      title="Go to frontpage"
    >
      <UIcon name="i-typcn-home" class="text-4xl" aria-hidden="true" />
    </NuxtLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <UButton to="/posts" label="Blog" color="neutral" variant="ghost" class="hidden md:inline-flex" />
        <UButton to="/posts" icon="i-ri-article-line" color="neutral" variant="ghost" class="md:hidden" aria-label="Blog" />
        <UButton to="/projects" label="Projects" color="neutral" variant="ghost" class="hidden md:inline-flex" />
        <UButton to="/projects" icon="i-ri-lightbulb-line" color="neutral" variant="ghost" class="md:hidden" aria-label="Projects" />
        <UButton to="https://fosstodon.org/@Demivan" icon="i-ri-mastodon-line" color="neutral" variant="ghost" target="_blank" rel="me" aria-label="Mastodon" />
        <UButton to="https://twitter.com/IvanDemchuk" icon="i-feather-twitter" color="neutral" variant="ghost" target="_blank" rel="me" aria-label="Twitter" />
        <UButton to="https://github.com/demivan" icon="i-uil-github-alt" color="neutral" variant="ghost" target="_blank" rel="me" aria-label="GitHub" />
        <ToggleTheme />
      </div>
    </nav>
  </header>
</template>

<style>
.header h1 {
  margin-bottom: 0;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav .right {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
</style>
