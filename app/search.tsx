import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
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
    <SafeAreaView style={styles.safeArea}>
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
          {suggestions && (
            <SearchSuggestions
              suggestions={suggestions}
              context={context}
              onSubmit={searchSubmit}
            />
          )}
        </View>
      )}
      <Text style={styles.otherText}>Saved cites: </Text>
      {context.saved_cities && context.saved_cities.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.cityButton}
            onPress={() => goToCityPage(c.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.cityButtonText}>{c.name}</Text>
            <Ionicons name="chevron-forward" size={20} color="#007AFF" style={styles.cityButtonIcon} />
          </TouchableOpacity>
      ))}
    </SafeAreaView >
  )
}

export default search

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or your preferred background color
  },
  cityButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 8,
    alignSelf: 'stretch', // makes the button expand horizontally
    marginHorizontal: 16, // adds space on left and right
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cityButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  cityButtonIcon: {
    marginLeft: 8,
  },
  otherText: {
    marginLeft: 4,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    paddingTop: 10
  }
})