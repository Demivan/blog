<template>
  <button id="toggle-theme" onclick="toggleDark()">
    <icon-ri-moon-line class="icon-moon hidden" aria-hidden="true" />
    <icon-ri-sun-line class="icon-sun hidden" aria-hidden="true" />
  </button>
</template>

<script client:load lang="ts">
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

const savedTheme = localStorage.getItem('theme')
let isDark = savedTheme === null ? prefersDark.matches : savedTheme === 'dark'

const toggleThemeButton = document.getElementById('toggle-theme')

function updateDark() {
  document.documentElement.classList.toggle('dark', isDark)
  toggleThemeButton?.setAttribute('aria-pressed', isDark ? 'true' : 'false')
  toggleThemeButton?.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode')
  toggleThemeButton?.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode')
  toggleThemeButton?.getElementsByClassName('icon-moon')[0].classList.toggle('hidden', !zisDark)
  toggleThemeButton?.getElementsByClassName('icon-sun')[0].classList.toggle('hidden', isDark)
}

updateDark()

window.toggleDark = () => {
  isDark = !isDark
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  updateDark()
}
</script>
