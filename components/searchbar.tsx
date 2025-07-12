import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'
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
      <Ionicons name="search" style={styles.icon} size={20} color="#888" />
      <TextInput
        style={styles.input}
        placeholder="Search city"
        value={query}
        onChangeText={onChangeQuery}
        onFocus={onFocus}
        placeholderTextColor="#999"
        returnKeyType="search"
        clearButtonMode="while-editing"
        onSubmitEditing={onSubmit}
      />
      {isActive && (
        <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f7',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, //Android
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: '#222',
    paddingVertical: 0,
    backgroundColor: 'transparent',
  },
  cancelButton: {
    marginLeft: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  cancelText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '500',
  },
})