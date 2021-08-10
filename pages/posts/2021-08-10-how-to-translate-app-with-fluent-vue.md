---
title: How to translate your Vue.js app with fluent-vue
date: 2021-08-10T22:00:00.000+02:00
lang: en
duration: 15min
keywords: vue.js, vue, js, internationalization, fluent-vue, tutorial
---

This tutorial will walk you through adding translations to Vue.js application using fluent-vue library.

## Adding fluent-vue and dependencies

Add `fluent-vue` and required dependency `@fluent/bundle`.

```sh
pnpm add fluent-vue @fluent/bundle
```

## Create file with fluent-vue set up code

### src/i18n.js

```js
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

const bundle = new FluentBundle('en')
bundle.addResource(new FluentResource('hello-user = Hello, { $username }!'))

export const fluent = createFluentVue({
  bundles: [bundle],
})
```

### src/main.js

```js
import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
```

