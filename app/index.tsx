import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/favicon.png'
import { Link, useLocalSearchParams } from 'expo-router'
import { User, City, RefreshDataRequest} from '../types'
import Navbar from "../components/navbar"
import Place from '../components/place'
import { useAppContext } from '../context'
import { handleRefreshSubmit } from '../services/update_services'

const index = () => {
  const context = useAppContext()// overall app context
  
  const params = useLocalSearchParams<{city_id: string;}>()//page context
  const [city, setCity] = useState<City>()
  const [refresh_data, setRefreshData] = useState<RefreshDataRequest>()

  useEffect(() => {
    const len = context.saved_cities.length

    for(let i = 0; i < len; i++){
      if(context.saved_cities[i].id == params.city_id){
        setCity(context.saved_cities[i])
        setRefreshData({
          id: context.saved_cities[i].id,
          lat: context.saved_cities[i].location.lat, 
          lng: context.saved_cities[i].location.lng
        })
        break
      }
    }

  }, [params.city_id])

  return (
    <View style={styles.container}>
      {params.city_id ? (
        <View>
          <Button title = 'refresh' onPress={() => {handleRefreshSubmit(refresh_data, context)}}/>
          <Place city_id={params.city_id}/>
        </View>
      ) :(
        <View>
        <Image source={logo}/>
        <Text style={styles.title}>Ether Status</Text>
        <View style={styles.card}>
          <Text>I am Card</Text>
        </View>
        </View>
      )}
    <Navbar/>
    <Link href="./search">search page</Link>
    </View>
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