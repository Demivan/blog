<script setup>
definePageMeta({
  display: 'Ivan Demchuk',
})
</script>

<template>
  <Page>
    <p>Hi 👋, I'm Ivan Demchuk. I'm Tech Lead, Full-Stack Developer working in Lviv, Ukraine.</p>

    <p>
      Creator of <a href="https://github.com/demivan/fluent-vue">fluent-vue</a><br/>
      Core team member of <a href="https://github.com/vitest-dev/vitest">Vitest</a>
    </p>

    <a href="https://stand-with-ukraine.pp.ua">
      <img alt="Stand With Ukraine" src="https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner2-direct.svg" />
    </a>

    <ul>
      <li>
        🔭 I'm currently working on Vue.js i18n plugin - <code>fluent-vue</code><br/>
        GitHub: <a href="fluent-vue">https://github.com/fluent-vue/fluent-vue</a><br/>
        Docs: <a href="https://fluent-vue.demivan.me">fluent-vue.demivan.me</a><br/>
      </li>
      <li>
        🌱 I'm currently learning Nuxt 3
      </li>
      <li>
        💬 Ask me about Vue, C#, Linux and Cosmere <div class="i-logos-cosmere dark-invert inline-block align-middle text-2xl"></div>
      </li>
      <li>
        📫 How to reach me: <a href="mailto:ivan.demchuk@gmail.com">ivan.demchuk@gmail.com</a>
      </li>
    </ul>

    <h3>
      🔧 Technologies & Tools
    </h3>

    <div class="flex flex-wrap gap-1 mb-4">
      <Badge title="OS" icon="i-simple-icons:linux" subtitle="ArchLinux"></Badge>
      <Badge title="Shell" icon="i-simple-icons:gnubash" subtitle="Fish"></Badge>
      <Badge title="Editor" icon="i-simple-icons:rider" subtitle="JetBrains Rider"></Badge>
      <Badge title="Font" icon="i-simple-icons:jetbrains" subtitle="JetBrains Mono"></Badge>
    </div>

    <div class="flex flex-wrap gap-1">
      <Badge title="C#" icon="i-simple-icons:csharp"></Badge>
      <Badge title="ASP.NET Core" icon="i-simple-icons:dotnet"></Badge>
      <Badge title="Vue.js" icon="i-simple-icons:vuejs"></Badge>
      <Badge title="TypeScript" icon="i-simple-icons:typescript"></Badge>
      <Badge title="JavaScript" icon="i-simple-icons:javascript"></Badge>
    </div>
  </Page>
</template>
