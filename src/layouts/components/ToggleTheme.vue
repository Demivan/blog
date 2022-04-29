<template>
  <button :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" onclick="toggleDark()">
    <icon-ri-moon-line v-show="isDark" aria-hidden="true" />
    <icon-ri-sun-line v-show="!isDark" aria-hidden="true" />
  </button>
</template>

<script client:load lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

window.toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<script setup lang='ts'>
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>
