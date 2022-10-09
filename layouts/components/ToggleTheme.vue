<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

const isDark = computed(() => colorMode.preference === 'dark')
</script>

<template>
  <button @click="toggleColorMode">
    <div v-show="isDark" class="i-ri-sun-line" aria-hidden="true" />
    <div v-show="!isDark" class="i-ri-moon-line" aria-hidden="true" />
  </button>
</template>
