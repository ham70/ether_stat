import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SearchBarCommands } from 'react-native-screens';

interface SearchbarProps {
  query: string,
  onChangeQuery: (text: string) => void,
  onFocus: () => void,
  onCancel: () => void,
  onSubmit: () => void,
  isActive: boolean
}

const Searchbar = ({query, onChangeQuery, onFocus, onCancel, onSubmit, isActive} : SearchbarProps) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder={"city name"}
        value={query}
        onChangeText={onChangeQuery}
        onFocus={onFocus}
        placeholderTextColor="#999"
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      {isActive && (
        <View>
          <Button title ='Submit' onPress={onSubmit}/>
          <Button title='Cancel' onPress={onCancel}/>
        </View>
      )}
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
})