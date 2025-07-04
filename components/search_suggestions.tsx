import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { handleSearchSubmit, handleSearchSuggestions } from '../services/search_services'
import { searchSuggestion } from '../types'
import { AppContext } from '../types'

interface SearchSuggestionProps {
  suggestions: searchSuggestion[],
  context: AppContext,
  onSubmit: (s: string, id: string | undefined, c: AppContext) => void
}

const SearchSuggestions = ({suggestions, context, onSubmit} : SearchSuggestionProps) => {

  return (
    <View>
      <Text>Suggestions</Text>
      {suggestions.map((s) => (
        <Button
          key={s.id}
          title={s.full_address}
          onPress={() => onSubmit(s.full_address, s.id, context)}
        />
      ))}
    </View>
  )
}

export default SearchSuggestions