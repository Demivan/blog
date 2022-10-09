<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  subtitle: { type: String, default: null },
})
</script>

<template>
  <div class="badge font-mono">
    <div class="title">
      <div class="icon" :class="icon" />
      {{ title }}
    </div>
    <div v-if="subtitle" class="subtitle">
      {{ subtitle }}
    </div>
  </div>
</template>

<style scoped>
  .badge {
    color: white;
    display: flex;
    flex-direction: row;
  }

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #273849;
    padding: 0 0.5em;
  }

  .icon {
    margin-right: 0.25em;
  }

  .subtitle {
    background-color: #2bbc8a;
    padding: 0 0.5em;
  }
</style>
