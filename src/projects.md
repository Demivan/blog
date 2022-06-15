---
title: Projects
subtitle: List of projects I'm working on
description: List of projects I'm working on
projects:
  Vue:
    - name: 'fluent-vue'
      link: 'https://github.com/fluent-vue/fluent-vue'
      desc: 'Internationalization plugin for Vue 2 and 3. Vue.js integration of fluent.js'

  Contributing to:
    - name: 'fluent.js'
      link: 'https://github.com/projectfluent/fluent.js'
      desc: 'JavaScript implementation of Project Fluent'
    - name: 'vitest'
      link: 'https://github.com/vitest-dev/vitest'
      desc: "A Vite-native test framework. It's fast!"
---

<script setup>
  import { useData } from 'vitepress'

  import ListProjects from './components/ListProjects.vue'
  import StarsRanking from './components/StarsRanking.vue'

  const { frontmatter } = useData()
</script>

<ListProjects :projects="frontmatter.projects"/>

<StarsRanking/>
