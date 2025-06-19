import { useAppContext } from '../context'
import { City } from '../types'

const context = useAppContext()

export const handleSearchSubmit = async (query: string) => {
  try {
    const res = await fetch(`localhost:3000/search?q=${query}`)

    const json = await res.json();
    const new_city : City = json.city

    const new_cities : City[] = context.saved_cities
    new_cities.push(new_city)
    context.setSavedCities(new_cities)
  } catch(error){
    console.error(error)
  }
}