import { defineStore } from 'pinia'
import { ref } from 'vue'
import { fetchRandomCocktail } from '../services/cocktailsService'
import type { Cocktail } from '../types/cocktail.types'

export const useCocktailStore = defineStore('cocktail', () => {
  const cocktails = ref<Cocktail[]>([])

  const getRandomCocktails = async (count = 12) => {
    const promises: Promise<Cocktail>[] = Array.from({ length: count }, () => fetchRandomCocktail())

    const results = await Promise.all(promises)

    cocktails.value = results
  }

  return { cocktails, getRandomCocktails }
})
