<page>
title: Projects
subtitle: List of projects I'm working on
description: List of projects I'm working on
</page>

<script setup lang="ts">
import { computed } from 'vue'

const projects = {
  'Vue': [
    {
      name: 'fluent-vue',
      link: 'https://github.com/fluent-vue/fluent-vue',
      desc: 'Internationalization plugin for Vue 2 and 3. Vue.js integration of fluent.js',
      icon: 'i-logos-fluent-vue',
    },
  ],
  'Contributing to': [
    {
      name: 'fluent.js',
      link: 'https://github.com/projectfluent/fluent.js',
      desc: 'JavaScript implementation of Project Fluent',
      icon: 'i-logos-fluent text-6xl dark-invert',
    }, {
      name: 'vitest',
      link: 'https://github.com/vitest-dev/vitest',
      desc: 'A blazing fast unit test framework powered by Vite.',
      icon: 'i-logos-vitest',
    },
  ],
}

const rankingUrl = computed(() => {
  const users = [
    'demivan',
  ]
  const repos = [
    'demivan/fluent-vue',
  ]

  const query = [
    ...users.map(i => `user:${i}`),
    ...repos.map(i => `repo:${i}`),
  ].join(' ')

  return `https://github.com/search?l=&o=desc&s=stars&type=Repositories&q=${encodeURIComponent(query)}`
})
</script>

<template>
  <template v-for="key in Object.keys(projects)" :key="key">
    <h4 class="mt-10 font-bold">
      {{ key }}
    </h4>
    <div class="project-grid py-2 -mx-3 gap-2">
      <a
        v-for="item, idx in projects[key]"
        :key="idx"
        class="item relative flex"
        :href="item.link"
        target="_blank"
        :class="!item.link ? 'opacity-0 pointer-events-none h-0 -mt-8 -mb-4' : ''"
      >
        <div v-if="item.icon" class="pt-2 pr-5">
          <div class="text-4xl" :class="item.icon || 'i-carbon-unknown'" />
        </div>
        <div class="flex-auto">
          <div class="text-normal">{{ item.name }}</div>
          <div
            class="desc text-sm opacity-50 font-normal"
            v-html="item.desc"
          />
        </div>
      </a>
    </div>
  </template>

  <a :href="rankingUrl" target="_blank">All projects sorted by Stars</a>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

a.item {
  padding: 0.8em 1em;
  background: transparent;
  font-size: 1.1rem;
}

a.item:hover {
  background: #88888808;
}
</style>
