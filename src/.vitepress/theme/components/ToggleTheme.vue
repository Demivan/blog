<template>
  <button :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleDark">
    <ri-moon-line v-show="isDark" aria-hidden="true" />
    <ri-sun-line v-show="!isDark" aria-hidden="true" />
  </button>
</template>

<script setup lang='ts'>
import { useDark } from '@vueuse/core'

const isDark = useDark()

function toggleDark() {
  isDark.value = !isDark.value
}
</script>
