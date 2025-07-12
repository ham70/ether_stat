import { useAppContext } from '../context'
import { AppContext } from '../types'
import { City, searchSuggestion } from '../types'

//standard search submit
export const handleSearchSubmit = async (
  query: string,
  id: string | undefined,
  context: AppContext
) => {
  try {
    const res = await fetch(`https://ether-stat-backend.vercel.app/search?q=${query}&id=${id}`)
    const new_city : City = await res.json();

    if(context.saved_cities_set && context.saved_cities_set.has(new_city.id)){
      console.log("cannot add the same city more than once")
      return
    }
    const new_cities : City[] = context.saved_cities
    new_cities.push(new_city)
    context.saved_cities_set.add(new_city.id)
    context.setSavedCities(new_cities)
  } catch(error){
    console.error(error)
  }
}

//call for dynamic search results
export const handleSearchSuggestions = async (query : string): Promise<searchSuggestion[]> => {
  const res = await fetch(`https://ether-stat-backend.vercel.app/search/suggest?q=${query}`)
  const suggestions : searchSuggestion[] = await res.json()
  return suggestions
}