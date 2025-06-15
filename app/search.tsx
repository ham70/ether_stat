import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Place from '../components/place'
import { useRouter } from 'expo-router'
import { useAppContext } from '../context'
import Searchbar from '../components/searchbar'

const search = () => {
  const router = useRouter()
  const goToCityPage = (city_id: string) => {
    router.push(`/?city_id=${city_id}`)
  }
  //app context
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length

  //search page context
  const [query, setQuery] = useState('')
    
  return (
    <View>
      <Text>search page</Text>
      <Searchbar 
        query={query}
        onChangeQuery={setQuery}
        onSubmit={}
        />
      <Text>Saved Cities</Text>
      {Array.from({ length: city_qaunt}, (_, index) => index + 1).map(city_num => (
        <Button title='city' onPress={() => goToCityPage(context.saved_cities[city_num - 1].id)}/>
      ))}
    </View>
  )
}

export default search

const styles = StyleSheet.create({})