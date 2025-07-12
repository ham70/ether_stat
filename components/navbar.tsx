import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAppContext } from '../context'

const Navbar = () => {
  const router = useRouter()
  const goToPage = (city_id: string) => {
    router.push(`/?city_id=${city_id}`);
  }
  const goToSearch = () => {
    router.push('./search')
  }

  const context = useAppContext()
  useEffect(() => {}, [context])

  return (
    <View style={styles.container}>
      {/* Search Icon (Left) */}
      <TouchableOpacity onPress={goToSearch} style={styles.sideIcon}>
        <Ionicons name="search" size={28} color="#007AFF" />
      </TouchableOpacity>

      {/* Centered Location Icon and Dots */}
      <View style={styles.centerContainer}>
        <TouchableOpacity onPress={() => goToPage('u')} style={styles.iconButton}>
          <Ionicons name="location-sharp" size={28} color="#007AFF" />
        </TouchableOpacity>
        <View style={styles.dotsContainer}>
          {context.saved_cities != null && context.saved_cities.map((c) => (
            <TouchableOpacity
              key={c.id}
              onPress={() => goToPage(c.id)}
              style={[
                styles.dot,
                context.current_city?.id === c.id && styles.dotActive,
              ]}
              accessibilityLabel={c.name}
            />
          ))}
        </View>
      </View>

      {/* Spacer (Right) */}
      <View style={styles.sideIcon} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 16,
    margin: 10,
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  sideIcon: {
    width: 40,
    alignItems: 'center',
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButton: {
    marginRight: 18,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ccc',
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: '#007AFF',
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 2,
  },
})