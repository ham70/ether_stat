import { useAppContext } from '../context'
import { AppContext } from '../types'
import { City, searchSuggestions } from '../types'

//standard search submit
export const handleSearchSubmit = async (
  query: string,
  context: AppContext
) => {
  try {
    const res = await fetch(`http://localhost:3000/search?q=${query}`)
    const new_city : City = await res.json();

    const new_cities : City[] = context.saved_cities
    new_cities.push(new_city)
    context.setSavedCities(new_cities)
  } catch(error){
    console.error(error)
  }
}

//call for dynamic search results
export const handleSearchSuggestions = async (query : string): Promise<searchSuggestions> => {
  const res = await fetch(`http://localhost:3000/search/suggest?q=${query}`)
  const suggestions : searchSuggestions = await res.json()
  return suggestions
}