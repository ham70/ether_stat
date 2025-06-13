import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import logo from '../assets/favicon.png'
import { Link, useLocalSearchParams } from 'expo-router'
import { User, City} from '../types'
import Navbar from "../components/navbar"
import { fakeCities } from '../cities'
import Place from '../components/place'

const index = () => {
  const params = useLocalSearchParams<{city_id: string;}>()

  useEffect(() => {
  }, [params])

  return (
    <View style={styles.container}>
      {params.city_id ? (
        <Place city_id={params.city_id}/>
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