<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCocktailStore } from '../stores/cocktail.store'
import CocktailsList from '../components/CocktailsList.vue'
import ViewToggle from '@/components/view-toggle/ViewToggle.vue'
import type { ViewMode } from '@/components/view-toggle/viewMode.types'
import CocktailsGrid from '../components/CocktailsGrid.vue'

const cocktailStore = useCocktailStore()
const mode = ref<ViewMode>('grid')

onMounted(() => {
  cocktailStore.getRandomCocktails()
})
</script>

<template>
  <div class="cocktails-view-container">
    <h1>🍹Random Cocktails App</h1>

    <ViewToggle v-model:mode="mode" />
    <div v-if="mode === 'grid'">
      <CocktailsGrid :cocktails="cocktailStore.cocktails" />
    </div>

    <div v-else>
      <CocktailsList :cocktails="cocktailStore.cocktails" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cocktails-view-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}
</style>
