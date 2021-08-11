---
title: How to localize your Vue.js app with fluent-vue
date: 2021-08-10T22:00:00.000+02:00
lang: en
duration: 15min
keywords: vue.js, vue, js, internationalization, fluent-vue, tutorial, example
---

This tutorial will walk you through adding internationalization to Vue.js application using fluent-vue library.

I'm going to explain the following topics:

 * Installing and setting up fluent-vue
 * Adding support for multiple locales
 * Storing and using translation messages
 * Implementing pluralization
 * Datetime and number formatting
 * Switching locales

For this tutorial, I've chosen to create the Vue 3 project using vue-cli with default preset. If you want to add translations to an existing Vue.js project, you can skip "Initializing project" step.

You can find the project on GitHub: [fluent-vue-example](https://github.com/Demivan/fluent-vue-example). Each tutorial step will have a separate commit.

## Initializing project

Commit [73fe072](https://github.com/Demivan/fluent-vue-example/commit/73fe07226debeb800652ea483f59dfc1c2947279)

Let us create a Vue.js 3 project using vue-cli. Pick `Default (Vue 3)` preset.

```sh
vue create fluent-vue-example
```

## Adding fluent-vue and dependencies

Commit [747d148](https://github.com/Demivan/fluent-vue-example/commit/747d148d3cf06d4ce05683de5ad941bee8ef88c5)

Add `fluent-vue` and its required dependency `@fluent/bundle` to packages.

```sh
pnpm add fluent-vue @fluent/bundle
```

If your application is using Vue 2, you also need to install `@vue/composition-api`

```sh
pnpm add @vue/composition-api
```

***Note:*** `@fluent/bundle` requires `Intl` formatters (`Intl.DateTimeFormat`, `Intl.NumberFormat`, `Intl.PluralRules`) to be available. If you want to support older browsers, you will need to polyfill them. For this purpose, you can use the [polyfill.io](https://polyfill.io) service.

## Adding fluent-vue initialization code

Commit [e42a61d](https://github.com/Demivan/fluent-vue-example/commit/e42a61db7f901f1404d02cb639bd56ec2fd1c409)

### src/fluent.js

<span class="lines">

```js
import { FluentBundle, FluentResource } from '@fluent/bundle'
import { createFluentVue } from 'fluent-vue'

// Create bundles
const enBundle = new FluentBundle('en')
const ukBundle = new FluentBundle('uk')

// Add global resources
enBundle.addResource(new FluentResource('hello-user = Hello, {$username}!'))
ukBundle.addResource(new FluentResource('hello-user = Привіт, {$username}!'))

// Create Vue plugin and set default locales
export const fluent = createFluentVue({
  bundles: [enBundle]
})
```

</span>

What is happening in this file:  
* **lines 5-6:** We create fluent.js bundles for each language in our app. The bundle holds translation messages for the respective language.
* **lines 9-10** We add global translation messages to the bundles. These translations will be available in every component.
* **lines 13-15** We create fluent-vue plugin instance. `bundles` property is a list of bundles that represents a fallback chain of languages. If target translation is not found in the first bundle, the next in the list is used.

The next step is to add created fluent-vue plugin to our app.

### src/main.js

<CodeGroup>

<CodeGroupItem title="Vue 3">

```js
import { createApp } from 'vue'
import App from './App.vue'
import { fluent } from './fluent'

createApp(App)
  .use(fluent)
  .mount('#app')
```

</CodeGroupItem>

<CodeGroupItem title="Vue 2">

```js
import Vue from 'vue'
import App from './App.vue'
import { fluent } from './fluent'

Vue.use(fluent)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

</CodeGroupItem>

</CodeGroup>

And that is it. You can now start using translations in your app.

## Using fluent-vue in components

Commit [4b89bb9](https://github.com/Demivan/fluent-vue-example/commit/4b89bb9e5468e91e37c03e82496164bf2410b88f)

Let us try using global translations in our app.  
`$t` method is the easiest way to localize your app. It just needs translation key and arguments that will be passed to the message.

```ftl
hello-user = Hello, {$username}!
```

### src/App.vue

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld :msg="$t('hello-user', { username: 'World' })"/>
</template>
```

As you can see header is now localized:

![app with localized header](/images/fluent-vue-example-method.png)

