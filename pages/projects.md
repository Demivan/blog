---
title: Projects - Ivan Demchuk
display: Projects
subtitle: List of projects I'm working on
description: List of projects I'm working on
projects:
  Vue:
    - name: 'fluent-vue'
      link: 'https://github.com/demivan/fluent-vue'
      desc: 'Internationalization plugin for Vue 2 and 3. Vue.js intergration of fluent.js'
  
  Contributing to:
    - name: 'fluent.js'
      link: 'https://github.com/projectfluent/fluent.js'
      desc: 'JavaScript implementation of Project Fluent'
    - name: 'vitest'
      link: 'https://github.com/vitest-dev/vitest'
      desc: "A Vite-native test framework. It's fast!"

---

<ListProjects :projects="frontmatter.projects"/>

<StarsRanking/>
