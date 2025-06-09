import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context, useAppContext } from '../context'

const Navbar = () => {
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length
  return (
    <View>
      <Text>navbar</Text>
      <Text>hello the navbar has context and can see {city_qaunt} amount of cities</Text>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})