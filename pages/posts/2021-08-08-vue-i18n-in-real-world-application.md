---
title: Trying to use vue-i18n in real-world application
description: In this blog post I explain what problems I have encountered when trying to use vue-i18n library for internationalization of my Vue.js app.
date: 2021-08-08T21:00:00.000+02:00
lang: en
duration: 5min
keywords: vue.js, vue, js, internationalization, vue-i18n
---

After months of frustration with trying to use the "de-facto" internationalization library for Vue.js - `vue-i18n` (there is no way you can Google a different one), I've decided it is time to replace it. And that is why I have created [fluent-vue](https://fluent-vue.demivan.me). I will write more about it and [Fluent syntax](https://projectfluent.org/) it uses in my following blog posts.

In this blog post, I try to explain what problems I have encountered when trying to use the `vue-i18n` library in my app.

### vue-i18n good parts:

Firstly, this is what I liked in `vue-i18n`:

#### Component interpolation
Component interpolation allows using components inside translation messages. Nice way of reducing `v-html` directive usages.

#### SFC custom blocks
Keeping translations for the component in the same file as template and js code is really convenient.

#### Tooling
Being the most used Vue.js internationalization library it has a heap of useful packages and extensions.
 
### vue-i18n issues:

And this is what I didn't like in `vue-i18n` or what didn't work for my project:

#### Complicated API for developers

`vue-i18n` has 5 different methods: (`$t`, `$tc`, `$te`, `$d`, `$n`). It has separate methods for formatting simple text, pluralized text, date, and numbers.

#### "Leaky" localizations

Grammar of source language limits what features translators can use and leaks into app code and translations messages of other languages.

***Example (pluralization):***

If you want translators to be able to use pluralization, you are forced to use `$tc` method. Even if you don't need it for your source language. You cannot just write:
```js
const messages = {
  en: {
    'copy-n-files': 'Copy {count} files'
  }
}

$t('copy-n-files', { count: filesCount })
```

You need to use `$tc` method with additional parameter:
```js
$tc('copy-n-files', filesCount, { count: filesCount })
```

And translators still have no way of knowing, without checking application code, whether translation that uses the following format would be pluralized.
```js
const messages = {
  en: {
    'copy-n-files': 'Copy {count} file | Copy {count} files'
  }
}
```

On top of that, if translator tries to use this syntax and developer did not use `$tc` method, it will not be pluralized and you will see both choice variants displayed in your app.

<details>
  <summary>
    <em>fluent-vue solution</em>
  </summary>

```ftl
copy-n-files = { $count -> 
    [one] Copy file
   *[other] Copy {$count} files
}
```

```js
$t('copy-n-files', { count: 5 })
```

This syntax can be used in any translation message to choose an option based on different plural categories.
</details>

#### Translators do not have control over translations

Developers are forced to make choices that translators should make: should translation message be pluralized, what date and number format to use.

***Example (date format):***

`vue-i18n` has a fixed number of developer-predefined date formats and developer decides what format to use in each case.

```js
const dateTimeFormats = {
  'en': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      ...
    }
  }
}

const messages = {
  'en': {
    'last-online': 'User was last online at {date}'
  }
}

$t('last-online', { date: $d(new Date(), 'short') })
```

Translators cannot change date formatting for a particular translation, for example, if it does not fit into UI in some language.

<details>
  <summary>
    <em>fluent-vue solution</em>
  </summary>

Fluent syntax allows translators to call custom function in translation messages. There is built in `DATETIME` function:

```ftl
last-online = User was last online at { DATETIME($date, year: "numeric", month: "short", month: "short") }
```

```js
$t('last-online', { date: new Date() })
```

If you want to have predefined date formats it can easily be implemented using a custom function. But translators will still be able to choose what format to use in each case.

</details>

#### Syntax is not powerfull enought

Even with `$tc` method there is no way to have pluralization that depends on counts of 2 or more objects:

```js
$tc('apples-and-bananas', /* what should go here? */, { appleCount: 1, bananaCount: 5 })

const messages = {
  en: {
    'apples-and-bananas': '{appleCount} apples and {bananaCount} bananas'
  }
}
```

One possible solution for this issue is spliting translation into three different ones. But is does not look particularly good:

```js
$t('apples-and-bananas', {
  appleCountText: $tc('apples', 1, { appleCount: 1 })
  bananaCountText: $tc('banana', 5, { bananaCount: 5 }
})

const messages = {
  en: {
    'apples-and-bananas': '{appleCountText} and {bananaCountText}'
    'apples': '{appleCount} apple | {appleCount} apples'
    'bananas': '{bananaCount} banana | {bananaCount} bananas'
  }
}
```

<details>
  <summary>
    <em>fluent-vue solution</em>
  </summary>

Thanks to Fluent syntax you can write it like this:
```js
$t('apples-and-bananas', { appleCount: 1, bananaCount: 5 })
```

```ftl
apples-and-bananas = {$appleCount -> 
    [one] An apple
   *[other] {$appleCount} apples
} and {$bananaCount -> 
    [one] a banana
   *[other] {$bananaCount} bananas
}
```
</details>
