import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Searchbar = (
 query: string,
 onChangeQuery: (text: string) => void,
 onSubmit: () => void) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon}/>
      <TextInput
        style={styles.input}
        placeholder={"city name"}
        value={query}
        onChangeText={onChangeQuery}
        placeholderTextColor="#999"
        returnKeyType="search"
        clearButtonMode="while-editing"
      />
      <Button title ='Submit' onPress={onSubmit}/>
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