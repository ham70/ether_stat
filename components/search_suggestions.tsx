import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
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
      <Text style={styles.otherText}>Suggestions:</Text>
      {suggestions.map((s) => (
        <TouchableOpacity
          key={s.id}
          style={styles.suggestionButton}
          onPress={() => onSubmit(s.full_address, s.id, context)}
          activeOpacity={0.7}
        >
          <Text style={styles.suggestionButtonText}>{s.full_address}</Text>
          <Ionicons name="arrow-forward-circle" size={20} color="#007AFF" style={styles.suggestionButtonIcon} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SearchSuggestions

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // or your preferred background color
  },
  suggestionButton: {
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
  suggestionButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    flex: 1, // ensures the text takes up available space
  },
  suggestionButtonIcon: {
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