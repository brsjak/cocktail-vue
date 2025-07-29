<script setup lang="ts">
import type { Cocktail } from '../types/cocktail.types'
import CocktailListItem from './CocktailListItem.vue'

defineProps<{ cocktails: Cocktail[] }>()
</script>

<template>
  <div class="list-container">
    <CocktailListItem v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
  </div>
</template>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
}
</style>
