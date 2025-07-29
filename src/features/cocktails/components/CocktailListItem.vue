<script setup lang="ts">
import { type IngredientMeasure, getIngredientMeasures } from '@/utils/cocktailUtils'
import { computed } from 'vue'
import type { Cocktail } from '../types/cocktail.types'

const props = defineProps<{ cocktail: Cocktail }>()

const ingredientMeasures = computed<IngredientMeasure[]>(() =>
  getIngredientMeasures(props.cocktail),
)
</script>

<template>
  <div class="list-item-container">
    <img class="list-item-image" :src="cocktail.strDrinkThumb" alt="Cocktail image" />

    <div class="list-item-content-container">
      <div class="">
        <h2 class="list-item-title">{{ cocktail.strDrink }}</h2>

        <div>
          <h3 class="list-item-subtitle">Ingredients</h3>
          <ul>
            <li v-for="({ measure, ingredient }, idx) in ingredientMeasures" :key="idx">
              {{ measure }} {{ ingredient }}
            </li>
          </ul>
        </div>
      </div>
      <div class="list-item-recipe-container">
        <h3 class="list-item-subtitle">Recipe</h3>
        <p class="list-item-description">{{ props.cocktail.strInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-item-container {
  width: 100%;
  display: flex;
  border: 1px solid #d3d3d3;
  border-radius: 8px;

  .list-item-image {
    max-width: 250px;
    width: 100%;
    height: 250px;
  }

  .list-item-content-container {
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: space-between;

    .list-item-recipe-container {
      max-width: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 20px;

      border-left: 1px solid #f1bc29;

      .list-item-description {
        display: -webkit-box;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* number of lines you want */
        overflow: hidden;
      }
    }
  }
}

.list-item-title {
  font-size: 22px;
  font-weight: 600;
}

.list-item-subtitle {
  font-size: 18px;
  font-weight: 500;
}
</style>
