import { useAppContext } from '../context'
import { AppContext } from '../types'
import { City, RefreshDataRequest, RefreshDataReseponse } from '../types'

export const handleRefreshSubmit = async (
  post_data: RefreshDataRequest | undefined,
  context: AppContext
) => {
  if(post_data == undefined){
    console.error('postdata must be defined, with id lat and lng, to request location refresh')
  }
  try {
    const res = await fetch('http://localhost:3000/refresh',{
      method: 'POST',
      headers: { 'Content_Type': 'application/json'},
      body: JSON.stringify(post_data)
    })
    const json = await res.json();
    const data : RefreshDataReseponse = json

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