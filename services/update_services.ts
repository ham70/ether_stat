import { useAppContext } from '../context'
import { AppContext } from '../types'
import { City, RefreshData } from '../types'

export const handleRefreshSubmit = async (
  lat: number | undefined,
  lng: number | undefined,
  context: AppContext
) => {
  if(lat == undefined || lng == undefined){
    console.error('lat and lng must be defined to request location refresh')
  }
  try {
    const res = await fetch(`http://localhost:3000/refresh?lat=${lat}&lng=${lng}`)
    const json = await res.json();
    const data : RefreshData = json.weather_data

    const len = context.saved_cities.length

    for(let i = 0; i < len; i++){
      if(context.saved_cities[i].id === data.id){
        context.saved_cities[i].weather_data = data.weather_data
        break
      }
    }
  } catch(error){
    console.error(error)
  }
}