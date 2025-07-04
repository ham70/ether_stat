import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { handleSearchSubmit, handleSearchSuggestions } from '../services/search_services'
import { searchSuggestion } from '../types'
import { AppContext } from '../types'

interface SearchSuggestionProps {
  suggestions: searchSuggestion[],
  context: AppContext
}

const SearchSuggestions = ({suggestions, context} : SearchSuggestionProps) => {

  return (
    <View>
      <Text>Suggestions</Text>
      {suggestions.map((s) => (
        <Button
          key={s.id}
          title={s.full_address}
          onPress={() => handleSearchSubmit(s.full_address, context)}
        />
      ))}
    </View>
  )
}

export default SearchSuggestions