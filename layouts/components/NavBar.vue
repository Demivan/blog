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
      <div class="i-typcn:home text-4xl" aria-hidden="true" />
    </NuxtLink>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <NuxtLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div class="i-ri-article-line md:hidden" />
        </NuxtLink>
        <NuxtLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div class="i-ri-lightbulb-line md:hidden" />
        </NuxtLink>
        <NuxtLink to="https://mastodon.social/@Demivan" rel="me" target="_blank" title="Mastodon">
          <div class="i-ri-mastodon-line" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/IvanDemchuk" rel="me" target="_blank" title="Twitter">
          <div class="i-feather-twitter" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink to="https://github.com/demivan" rel="me" "target"="_blank" title="GitHub">
          <div class="i-uil-github-alt" aria-hidden="true" />
        </NuxtLink>
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

.nav img {
  margin-bottom: 0;
}

.nav div[class^="i-"] {
  font-size: 1.25rem;
}

.header a, .header button {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.5;
  outline: none;
}

.header a:hover, .header a:focus, .header button:hover, .header button:focus {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
