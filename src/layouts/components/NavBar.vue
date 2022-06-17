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
      <svg width="1.2em" height="1.2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="font-size:1.75em;" aria-hidden="true" data-v-01a370fe=""><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.698 2.799a2 2 0 0 1 2.604 0l6.336 5.43l2.487 1.99a1 1 0 1 1-1.25 1.562l-.875-.7V19a2 2 0 0 1-2 2h-4v-5a2 2 0 1 0-4 0v5H6a2 2 0 0 1-2-2v-7.92l-.875.7a1 1 0 1 1-1.25-1.56l2.487-1.99l6.336-5.431z" fill="currentColor"></path></g></svg>
    </a>
    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <a href="/posts" title="Blog">
          <span class="<md:hidden">Blog</span>
          <icon-ri-article-line class="md:hidden" />
        </a>
        <a href="/projects" title="Projects">
          <span class="<md:hidden">Projects</span>
          <icon-ri-lightbulb-line class="md:hidden" />
        </a>
        <a href="https://twitter.com/IvanDemchuk" rel="noopener" target="_blank" title="Twitter">
          <icon-feather-twitter aria-hidden="true" />
        </a>
        <a href="https://github.com/demivan" rel="noopener" target="_blank" title="GitHub">
          <icon-uil-github-alt aria-hidden="true" />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="<md:hidden">
          <icon-la-rss-square style="font-size:1.25rem; margin: 0 -0.125rem;" aria-hidden="true" />
        </a>
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
