import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Place from '../components/place'
import { useRouter } from 'expo-router'
import { useAppContext } from '../context'
import Searchbar from '../components/searchbar'
import { handleSearchSubmit, handleSearchSuggestions } from '../services/search_services'
import { searchSuggestion } from '../types'

const search = () => {
  const router = useRouter()
  function goToCityPage(city_id: string){
    router.push(`/?city_id=${city_id}`)
  }
  //app context
  const context = useAppContext()
  const city_qaunt = context.saved_cities.length

  //search page context
  const [search_active, setSearchActive] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<searchSuggestion[]>()

  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 0){
        const suggestions : searchSuggestion[] = await handleSearchSuggestions(query)
        setResults(suggestions)
      }
    }
    fetchResults()
  }, [query])
    
  return (
    <View>
      <Text>search page</Text>
      <Searchbar 
        query={query}
        onChangeQuery={setQuery}
        onFocus={() => setSearchActive(true)}
        onCancel={() => {
          setSearchActive(false)
          setQuery("")
        }}
        onSubmit={() => handleSearchSubmit(query, context)}
        isActive={search_active}
        />
      {search_active && (
        <View>
          <Text>Meow results go here meow</Text>
        </View>
      )}
      <Text>Saved Cities</Text>
      {Array.from({ length: city_qaunt}, (_, index) => index + 1).map(city_num => (
        <Button key={context.saved_cities[city_num - 1].id} title={context.saved_cities[city_num - 1].name} 
        onPress={() => goToCityPage(context.saved_cities[city_num - 1].id)}/>
      ))}
    </View>
  )
}

export default search

const styles = StyleSheet.create({})