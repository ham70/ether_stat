import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { City } from '../types'
import { useAppContext } from '../context'
import { fakeCities } from '../cities'

const init_city: City = fakeCities[0]

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
            <Text>Coordinates: latitude {city.location.lat}, longitude {city.location.lng}</Text>
            <Text>weather description: {city.weather_data.conditions}</Text>
            <Text>Temp: {city.weather_data.temperature.main}</Text>
            <Text>Employement Rate: {city.demographics.employment_rate}, Median HH Income: {city.demographics.median_hh_income}</Text>
          </View>
        )
      }
    </View>
  )
}

export default Place

const styles = StyleSheet.create({})