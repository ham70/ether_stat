import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { City } from '../types'
import { useAppContext } from '../context'

const init_city = {
  id: "init",
  name: "init_city_localllll",
  weather_data: {
    location_id: "init_id",
    temperature: 75,
    conditions: "sunny",
    humidity: 80,
    wind_speed: 6,
    uv_index: 4,
    created_at: 'today'
  }
}

const Place = ({city_id}: {city_id : string}) => {
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length

  const [city, set_city] = useState<City>(init_city)
  const [loading, set_loading] = useState<boolean>(true)

  async function get_city(city_id : string){
    set_loading(true)
    try{
      for(let i = 0; i < city_qaunt; i++){
        if(context.saved_cities[i].id == city_id){
          set_city(context.saved_cities[i])
          break
        }
      }
        
      set_loading(false)
    }catch(error){
      console.error(error)
      set_loading(false)
    }
  }
  useEffect(()=>{get_city(city_id)}, [])

  return (
    <View>
      <Text>place</Text>
      {
        (loading && city != null) ? (
          <Text>hi i'm loading the place</Text>
        ) : (
          <View>
            <Text>{city.name}</Text>
            <Text>Coordinates: latitude {city.lat}, longitude {city.lng}</Text>
          </View>
        )
      }
    </View>
  )
}

export default Place

const styles = StyleSheet.create({})