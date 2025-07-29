import type { Cocktail } from '@/features/cocktails/types/cocktail.types'

export interface IngredientMeasure {
  ingredient: string
  measure: string
}

export function getIngredientMeasures(cocktail: Cocktail): IngredientMeasure[] {
  const combined: { ingredient: string; measure: string }[] = []

  for (let i = 1; i <= 15; i++) {
    // Use `as keyof Cocktail` and template literals for type safety
    const ingredientKey = `strIngredient${i}` as keyof Cocktail
    const measureKey = `strMeasure${i}` as keyof Cocktail

    const ingredient = cocktail[ingredientKey]
    if (!ingredient) continue

    const measure = cocktail[measureKey] ?? ''

    combined.push({
      ingredient: ingredient.trim(),
      measure: measure.trim(),
    })
  }

  return combined
}
