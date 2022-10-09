<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="font-sans text-gray-700 dark:text-gray-200">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
