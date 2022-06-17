<template>
  <div ref="el" :class="$attrs.class" style="vertical-align: text-bottom; min-width:1em; min-height:1em;" />
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import { renderSVG, addIcon } from '@iconify/iconify'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
})

addIcon('logos:fluent-vue', {
	body: '<path fill="#41B883" d="M517 5H414.6L209.8 359.4 261 448 517 5" /> <path fill="#34495E" d="m5 5 204.8 354.4 51.2-88.6-34.083-58.979h34.095l51.235-88.661H175.682l-17.047-29.499h170.659L380.529 5H5" />',
	width: 522,
	height: 453,
})

const el = ref<HTMLElement | null>(null)

const update = async() => {
  if (el.value) {
    await nextTick()
    const svg = renderSVG(props.icon, {})
    if (svg) {
      el.value.textContent = ''
      el.value.appendChild(svg)
    }
    else {
      const span = document.createElement('span')
      span.className = 'iconify'
      span.dataset.icon = props.icon
      el.value.textContent = ''
      el.value.appendChild(span)
    }
  }
}

watch(() => props.icon, update, { flush: 'post' })

onMounted(update)
</script>

<style>
span.iconify {
  background: #5551;
  border-radius: 100%;
  min-width: 1em;
  min-height: 1em;
  display: block;
}
</style>
