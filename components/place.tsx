import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { City } from '../types'
import { useAppContext } from '../context'
import { fakeCities } from '../cities'
import get_user_location from '../services/user_location'

const init_city: City = fakeCities[0]

const Place = ({ city_id, refresh_key }: { city_id: string, refresh_key: number }) => {
  const context = useAppContext()
  const [city, set_city] = useState<City>(init_city)
  const [loading, set_loading] = useState<boolean>(true)

  async function get_city(city_id: string) {
    set_loading(true)
    if (city_id === 'u') {
      try {
        const user_city: City | undefined = await get_user_location()
        if (user_city !== undefined) {
          set_city(user_city)
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        const city_qaunt = context.saved_cities.length
        for (let i = 0; i < city_qaunt; i++) {
          if (context.saved_cities[i].id == city_id) {
            set_city(context.saved_cities[i])
            break
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
    set_loading(false)
  }

  useEffect(() => { get_city(city_id) }, [refresh_key])

  // Helper to color AQI category
  const getAqiColor = (category : string) => {
    switch (category) {
      case 'Good air quality': return '#4CAF50'
      case 'Moderate air quality': return '#FFEB3B'
      case 'Unhealthy air quality': return '#FF9800'
      case 'Very Unhealthy air quality': return '#F44336'
      case 'Hazardous air quality': return '#8B0000'
      default: return '#90A4AE'
    }
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1976D2" />
          <Text style={styles.loadingText}>Loading place data...</Text>
        </View>
      ) : (
        <>
          <Text style={styles.headerText}>{city.name}</Text>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Weather</Text>
            <Text style={styles.temperature}>{city.weather_data.temperature.main}°F</Text>
            <Text style={styles.condition}>{city.weather_data.conditions}</Text>
            <Text style={styles.info}>L: {city.weather_data.temperature.min}° | H: {city.weather_data.temperature.max}°</Text>
            <Text style={styles.info}>Feels like: {city.weather_data.temperature.feels_like}°</Text>
            <Text style={styles.info}>Humidity: {city.weather_data.humidity}%</Text>
            <View style={styles.divider} />
            <Text style={styles.subSection}>Wind</Text>
            <Text style={styles.info}>Direction: {city.weather_data.wind.direction.degrees}° {city.weather_data.wind.direction.cardinal}</Text>
            <Text style={styles.info}>Speed: {city.weather_data.wind.speed} mph</Text>
            <Text style={styles.info}>Gust: {city.weather_data.wind.gust} mph</Text>
            <Text style={styles.info}>Chill: {city.weather_data.wind.chill}°F</Text>
            <View style={styles.divider} />
            <Text style={styles.info}>UV Index: {city.weather_data.uv_index}</Text>
            <Text style={styles.info}>Visibility: {city.weather_data.visibility} miles</Text>
            <Text style={styles.info}>Thunderstorm Probability: {city.weather_data.thunder_storm}%</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Air Quality</Text>
            <Text style={[styles.aqi, { color: getAqiColor(city.aqi_data.category) }]}>AQI: {city.aqi_data.aqi}</Text>
            <Text style={styles.info}>{city.aqi_data.category}</Text>
            <Text style={styles.info}>Dominant Pollutant: {city.aqi_data.dom}</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Demographics</Text>
            <Text style={styles.info}>{city.location.county_name}</Text>
            <Text style={styles.info}>Population: {city.demographics.population.toLocaleString()}</Text>
            <Text style={styles.info}>Employment Rate: {city.demographics.employment_rate}%</Text>
            <Text style={styles.info}>Median Income: ${city.demographics.median_hh_income.toLocaleString()}</Text>
            <Text style={styles.info}>Total Housing Units: {city.demographics.total_housing.toLocaleString()}</Text>
          </View>
        </>
      )}
    </ScrollView>
  )
}

export default Place

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContent: {
    paddingBottom: 32,
    paddingHorizontal: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: '#90A4AE',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 28,
    marginVertical: 24,
    color: '#1976D2',
    letterSpacing: 1,
  },
  card: {
    borderRadius: 18,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    padding: 18,
    marginVertical: 10,
    marginHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FF9800',
    textAlign: 'center',
    marginVertical: 8,
  },
  condition: {
    fontSize: 18,
    color: '#607D8B',
    textAlign: 'center',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: '#37474F',
    textAlign: 'center',
    marginVertical: 2,
  },
  subSection: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1976D2',
    marginTop: 10,
    marginBottom: 2,
    textAlign: 'center',
  },
  divider: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  aqi: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
  },
})
