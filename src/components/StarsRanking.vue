<script setup lang="ts">
import { getStarsRankingUrl } from './logic/getStarsRanking'
</script>

<template>
  <a :href="getStarsRankingUrl()" target="_blank">All projects sorted by Stars</a>
</template>
