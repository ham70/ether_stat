import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Place from '../components/place'
import { useRouter } from 'expo-router'
import { useAppContext } from '../context'
import Searchbar from '../components/searchbar'
import SearchSuggestions from '../components/search_suggestions'
import { handleSearchSubmit, handleSearchSuggestions } from '../services/search_services'
import { AppContext, searchSuggestion } from '../types'

const search = () => {
  const router = useRouter()
  const context = useAppContext()
  function goToCityPage(city_id: string){
    router.push(`/?city_id=${city_id}`)
  }
  const searchSubmit = async (query: string, id: string | undefined, context: AppContext) => {
    await handleSearchSubmit(query, id, context)
    const new_city_id = context.saved_cities[context.saved_cities.length - 1].id
    goToCityPage(new_city_id)
    setSearchActive(false)
    setQuery("")
  }

  //search page context
  const [search_active, setSearchActive] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<searchSuggestion[]>()

  //effect for handling search suggestions
  useEffect(() => {
    const fetchResults = async () => {
      if (query.length > 0){
        const sugg : searchSuggestion[] = await handleSearchSuggestions(query)
        setSuggestions(sugg)
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
        onSubmit={() => {searchSubmit(query, undefined, context)}}
        isActive={search_active}
        />
      {search_active && (
        <View>
          <Text>Meow results go here meow</Text>
          {suggestions && (
            <SearchSuggestions
              suggestions={suggestions}
              context={context}
              onSubmit={searchSubmit}
            />
          )}
        </View>
      )}
      <Text>Saved Cities</Text>
      {context.saved_cities.map((c) => (
        <Button
          key={c.id}
          title={c.name}
          onPress={() => goToCityPage(c.id)}
        />
      ))}
    </View>
  )
}

export default search

const styles = StyleSheet.create({})