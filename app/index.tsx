import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/favicon.png'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <Text style={styles.title}>Ether Status</Text>
      <View style={styles.card}>
        <Text>I am Card</Text>
      </View>
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