import { StyleSheet, Text, View, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { City } from '../types'
import { useAppContext } from '../context'
import { fakeCities } from '../cities'
import get_user_location from '../services/user_location'

const init_city: City = fakeCities[0]

const Place = ({city_id}: {city_id : string}) => {
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length

  const [city, set_city] = useState<City>(init_city)
  const [loading, set_loading] = useState<boolean>(true)

  async function get_city(city_id : string){
    set_loading(true)
    if(city_id === 'u'){
      try{
        const user_city: City = await get_user_location()
        set_city(user_city)
      } catch(error) {
        console.error(error)
      }
    } else {
      try{
        for(let i = 0; i < city_qaunt; i++){
          if(context.saved_cities[i].id == city_id){
            set_city(context.saved_cities[i])
            break
          }
        }
      } catch(error) {
        console.error(error)
      }
    }
    set_loading(false)
  }
  useEffect(()=>{get_city(city_id)}, [])

  return (
    <View style={styles.container}>
      {
        (loading && city != null) ? (
          <Text>hi i'm loading the place</Text>
        ) : (
          <>
            <Text style={styles.header_text}>{city.name}</Text>
              <View style={styles.box}>
                <Text style={styles.sub_header_test}>Weather</Text>
                <Text style={styles.large_test}>{city.weather_data.temperature.main}°F</Text>
                <Text style={styles.body_text}>{city.weather_data.conditions}</Text>
                <Text style={styles.body_text}>L: {city.weather_data.temperature.min}°  |  H: {city.weather_data.temperature.max}°</Text>
                <Text style={styles.body_text}>Feels like:  {city.weather_data.temperature.feels_like}</Text>
                <Text> </Text>
                <Text style={styles.noncentered_body_text}>Humidity: {city.weather_data.humidity}%</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.sub_header_test}>Air Quality</Text>
                <Text style={styles.large_test}>AQI: {city.aqi_data.aqi}</Text>
                <Text style={styles.body_text}>{city.aqi_data.category}</Text>
                <Text style={styles.body_text}>Dominant Pollutant: {city.aqi_data.dom}</Text>
              </View>

              <View style={styles.box}>
                <Text style={styles.sub_header_test}>Demographics</Text>
                <Text style={styles.body_text}>{city.location.county_name}</Text>
                <Text style={styles.noncentered_body_text}>Population:  {city.demographics.population}</Text>
                <Text style={styles.noncentered_body_text}>Employment Rate:  {city.demographics.employment_rate}%</Text>
                <Text style={styles.noncentered_body_text}>Median Income:  {city.demographics.median_hh_income}</Text>
                <Text style={styles.noncentered_body_text}>Total Housing Units:  {city.demographics.total_housing}</Text>
              </View>
          </>
        )
      }
    </View>
  )
}

export default Place

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  box: {
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    padding: 10,
    margin: 16,
  },
  header_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20
  },
  sub_header_test: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 7,
  },
  large_test: {
    textAlign: 'center',
    fontSize: 20
  },
  body_text: {
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 18
  },
  noncentered_body_text: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18
  },
})