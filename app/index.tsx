import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/favicon.png'
import { Link } from 'expo-router'
import { Context } from '../context'
import { User, City} from '../types'
import Navbar from "../components/navbar"

const index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLocationEnabled, setIsLocationEnabled] = useState<boolean>(false);
  const [currentCity, setCurrentCity] = useState<City | null>(null);
  const [savedCities, setSavedCities] = useState<City[]>([]);

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

  return (
    <Context.Provider value ={contextValue}>
    <View style={styles.container}>
      <Image source={logo}/>
      <Text style={styles.title}>Ether Status</Text>
      <View style={styles.card}>
        <Text>I am Card</Text>
      </View>
      <Link href="./search">search page</Link>
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