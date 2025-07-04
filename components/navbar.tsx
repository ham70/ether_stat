import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAppContext } from '../context'

const Navbar = () => {
  const router = useRouter()
  const goToPage = (city_id: string) => {
    router.push(`/?city_id=${city_id}`);
  }
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length
  useEffect(() => {}, [context])

  return (
    <View>
      <Text>navbar</Text>
      <Text>hello the navbar has context and can see {city_qaunt} amount of cities</Text>
      {context.location_enabled && (<Button title='curr_location'/>)}
      {context.saved_cities.map((c) => (
        <Button
          key={c.id}
          title={c.name}
          onPress={() => goToPage(c.id)}
        />
      ))}
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})