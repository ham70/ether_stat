import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'
import { useRouter } from 'expo-router'
import { Context, useAppContext } from '../context'

const Navbar = () => {
  const router = useRouter()
  const goToPage = (city_id: string) => {
    router.push(`/${city_id}`);
  }
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length
  return (
    <View>
      <Text>navbar</Text>
      <Text>hello the navbar has context and can see {city_qaunt} amount of cities</Text>
      {context.location_enabled && (<Button title='curr_location'/>)}
      {Array.from({ length: city_qaunt}, (_, index) => index + 1).map(city_num => (
        <Button title='city' onPress={() => goToPage(context.saved_cities[city_num].id)}/>
      ))}
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})