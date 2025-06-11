import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/favicon.png'
import { Link, useLocalSearchParams } from 'expo-router'
import { Context } from '../context'
import { User, City} from '../types'
import Navbar from "../components/navbar"
import { fakeCities } from '../cities'

const index = () => {
  //overall app state -------------------------------------------------
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [savedCities, setSavedCities] = useState<City[]>(fakeCities);

  const contextValue = {
    user: user,
    is_logged_in: isLoggedIn,
    location_enabled: isLocationEnabled,
    current_city: currentCity,
    saved_cities: savedCities,

    setUser: setUser,
    setIsLoggedIn: setIsLoggedIn,
    setIsLocationEnabled: setIsLocationEnabled,
    setCurrentCity: setCurrentCity,
    setSavedCities: setSavedCities
  }

  //home page state-----------------------------------------------
  const params = useLocalSearchParams<{city_id: string;}>()
  
  const [city, setCity] = useState<City | undefined>()
  function getCity(id : string): City | void{
    for(let i = 0; i < fakeCities.length; i++){
      if(fakeCities[i].id == id){
        return fakeCities[i]
      }
    }
    console.log(`error: city with id ${id} not found`)
  }

  useEffect(() => {
    const c = getCity(params.city_id)
    if(c){ setCity(c) }
  }, [params])

  return (
    <Context.Provider value ={contextValue}>
    <View style={styles.container}>
      {city ? (
        <Text>{city.name}</Text>
      ) :(
        <View>
        <Image source={logo}/>
        <Text style={styles.title}>Ether Status</Text>
        <View style={styles.card}>
          <Text>I am Card</Text>
        </View>
        <Link href="./search">search page</Link>
        </View>
      )}
      <Navbar/>
    </View>
    </Context.Provider>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0,1)'
    }
}) 