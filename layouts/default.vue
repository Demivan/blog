<script setup lang="ts">
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="font-sans text-gray-700 dark:text-gray-200">
    <NavBar />
    <slot />
    <Footer />
  </div>
</template>
