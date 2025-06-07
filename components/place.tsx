import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { City } from '../types'

const place = (city_id : string) => {
  const [city, set_city] = useState<City | null>(null)
  const [loading, set_loading] = useState<boolean>(true)

  async function get_city(city_id : City){
    set_loading(true)
    try{
        //logic to get city object from back end
        const graded_city = {
            id: "idhello bah bah bah",
            name: "nyc",
            coordinates: {
                lat: 1,
                lng: 2
            },
            threat_score: 60,
            temperature: 45,
            weather: 'cloudy with a chance of meatballs',
            elevation: 9,
            pollen_count: 10,
            aqi: 55,
            uvi: 8,
            crime_rate: 10000,
            population_size: 99999999,
            homelessness_rate: 15
        }
        
        console.log(city_id)
        set_city(graded_city)
        
        set_loading(false)

    }catch(error){
        console.error(error)
        set_loading(false)
    }
  }

  return (
    <View>
      <Text>place</Text>
      {
        (loading && city != null) ? (
            <Text>hi i'm loading the place</Text>
        ) : (
            <View>
                {city?.name}
            </View>
        )
      }
    </View>
  )
}

export default place

const styles = StyleSheet.create({})