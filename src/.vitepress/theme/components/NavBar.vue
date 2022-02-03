<script setup lang="ts">
import ToggleTheme from './ToggleTheme.vue'
</script>

<template>
  <header class="header text-black dark:text-white">
    <a
      class="w-10 h-10 absolute lg:fixed m-6 select-none outline-none"
      href="/"
      focusable="false"
      title="Go to frontpage"
    >
      <majesticons:home style="font-size: 1.75em;" aria-hidden="true" />
    </a>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <a href="/posts" title="Blog">
          <span class="<md:hidden">Blog</span>
          <ri-article-line class="md:hidden" />
        </a>
        <a href="/projects" title="Projects">
          <span class="<md:hidden">Projects</span>
          <ri-lightbulb-line class="md:hidden" />
        </a>
        <!--
        <a href="/notes" title="Notes">
          <ri-sticky-note-line />
        </a>
        -->
        <a href="https://twitter.com/IvanDemchuk" rel="noopener" target="_blank" title="Twitter">
          <feather-twitter aria-hidden="true" />
        </a>
        <a href="https://github.com/demivan" rel="noopener" target="_blank" title="GitHub">
          <uil-github-alt aria-hidden="true" />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="<md:hidden">
          <la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" aria-hidden="true" />
        </a>
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
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
