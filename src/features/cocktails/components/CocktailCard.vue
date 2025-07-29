<script setup lang="ts">
import CategoryTag from '@/components/tag/CategoryTag.vue'
import type { Cocktail } from '../types/cocktail.types'
import { getIngredientMeasures, type IngredientMeasure } from '@/utils/cocktailUtils'
import { computed, ref } from 'vue'

const props = defineProps<{ cocktail: Cocktail }>()

const isFlipped = ref(false)

const ingredientMeasures = computed<IngredientMeasure[]>(() =>
  getIngredientMeasures(props.cocktail),
)

function toggleFlip() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="card-container" @click="toggleFlip" :class="{ flipped: isFlipped }">
    <div class="card-front">
      <img class="card-image" :src="props.cocktail.strDrinkThumb" alt="Cocktail image" />
      <div class="card-content-container">
        <div class="card-meta-container">
          <CategoryTag :content="props.cocktail.strCategory" />
        </div>
        <h2 class="card-title">{{ props.cocktail.strDrink }}</h2>
        <p class="serving-content">
          Served in: <span>{{ props.cocktail.strGlass }}</span>
        </p>
        <p class="serving-content">
          Cocktail type: <span>{{ props.cocktail.strAlcoholic }}</span>
        </p>
      </div>
    </div>

    <div class="card-back" :style="{ backgroundImage: `url(${props.cocktail.strDrinkThumb})` }">
      <h3 class="card-back-subtitle">Ingredients</h3>
      <ul>
        <li v-for="({ measure, ingredient }, idx) in ingredientMeasures" :key="idx">
          {{ measure }} {{ ingredient }}
        </li>
      </ul>
      <h3 class="card-back-subtitle">Recipe</h3>
      <p class="card-description">{{ props.cocktail.strInstructions }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  width: 270px;
  height: 450px;
  perspective: 1000px;
  cursor: pointer;

  position: relative;

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    background: white;
    backface-visibility: hidden;
    transition: transform 0.6s;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }

  .card-front {
    z-index: 2;
    transform: rotateY(0deg);

    .serving-content {
      font-weight: 500;

      span {
        font-weight: 400;
      }
    }
  }

  .card-back {
    padding: 20px;
    transform: rotateY(180deg);
    overflow-y: auto;
    color: white;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: inherit;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: blur(6px);
      z-index: 0;
      border-radius: 8px;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.35);
      z-index: 1;
      border-radius: 8px;
    }

    > * {
      position: relative;
      z-index: 2;
    }

    .card-back-title {
      font-size: 22px;
      font-weight: 600;
    }

    .card-back-subtitle {
      margin-top: 10px;
      font-size: 18px;
      font-weight: 500;
    }

    .serving-content {
      font-weight: 500;

      span {
        font-weight: 400;
      }
    }

    .card-description {
      display: -webkit-box;
      line-clamp: 5;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &.flipped {
    .card-front {
      transform: rotateY(180deg);
    }
    .card-back {
      transform: rotateY(0deg);
      z-index: 3;
    }
  }
}

.card-image {
  width: 100%;
  height: auto;
  border-radius: 8px 8px 0 0;
}

.card-content-container {
  padding: 10px 25px;
  .card-meta-container {
    margin-bottom: 10px;
  }

  .card-title {
    font-weight: 600;
  }
}
</style>
