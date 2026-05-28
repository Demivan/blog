<script setup>
definePageMeta({
  display: 'Ivan Demchuk',
})
</script>

<template>
  <Page>
    <p>Hi, I'm Ivan Demchuk. I'm Tech Lead, Full-Stack Developer working in Lviv, Ukraine.</p>

    <p>
      Creator of <a href="https://github.com/demivan/fluent-vue">fluent-vue</a><br>
      Core team member of <a href="https://github.com/vitest-dev/vitest">Vitest</a>
    </p>

    <a href="https://stand-with-ukraine.pp.ua">
      <img alt="Stand With Ukraine" src="https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg">
    </a>

    <ul>
      <li>
        I'm currently working on Vue.js i18n plugin - <code>fluent-vue</code><br>
        GitHub: <a href="https://github.com/fluent-vue/fluent-vue">fluent-vue</a><br>
        Docs: <a href="https://fluent-vue.demivan.me">fluent-vue.demivan.me</a><br>
      </li>
      <li>
        I'm currently learning Nuxt 3
      </li>
      <li>
        Ask me about Vue, C#, Linux and Cosmere <UIcon name="custom-cosmere" class="dark-invert inline-block align-middle text-2xl" />
      </li>
      <li>
        How to reach me: <a href="mailto:ivan.demchuk@gmail.com">ivan.demchuk@gmail.com</a>
      </li>
    </ul>

    <h3>
      Technologies & Tools
    </h3>

    <div class="flex flex-wrap gap-1 mb-4">
      <Badge title="OS" icon="i-simple-icons-linux" subtitle="ArchLinux" />
      <Badge title="Shell" icon="i-simple-icons-gnubash" subtitle="Fish" />
      <Badge title="Editor" icon="i-simple-icons-rider" subtitle="JetBrains Rider" />
      <Badge title="Font" icon="i-simple-icons-jetbrains" subtitle="JetBrains Mono" />
    </div>

    <div class="flex flex-wrap gap-1">
      <Badge title="C#" icon="i-simple-icons-csharp" />
      <Badge title="ASP.NET Core" icon="i-simple-icons-dotnet" />
      <Badge title="Vue.js" icon="i-simple-icons-vuejs" />
      <Badge title="TypeScript" icon="i-simple-icons-typescript" />
      <Badge title="JavaScript" icon="i-simple-icons-javascript" />
    </div>
  </Page>
</template>
