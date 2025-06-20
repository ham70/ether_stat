import { useAppContext } from '../context'
import { AppContext } from '../types'
import { City } from '../types'

export const handleSearchSubmit = async (
  query: string,
  context: AppContext
) => {
  try {
    const res = await fetch(`http://localhost:3000/search?q=${query}`)
    const json = await res.json();
    const new_city : City = json.city

    const new_cities : City[] = context.saved_cities
    new_cities.push(new_city)
    context.setSavedCities(new_cities)
  } catch(error){
    console.error(error)
  }
}