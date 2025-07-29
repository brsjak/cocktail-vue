<script setup lang="ts">
import type { Cocktail } from '../types/cocktail.types'
import CocktailCard from './CocktailCard.vue'

defineProps<{ cocktails: Cocktail[] }>()
</script>

<template>
  <div class="cards-container">
    <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
  </div>
</template>

<style lang="scss" scoped>
.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
}
</style>
