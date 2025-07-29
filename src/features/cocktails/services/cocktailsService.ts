import axios from 'axios'
import type { Cocktail } from '../types/cocktail.types'

export const fetchRandomCocktail = async (): Promise<Cocktail> => {
  const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  return data.drinks[0]
}
