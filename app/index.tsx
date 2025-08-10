import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams } from 'expo-router'
import { User, City, RefreshDataRequest} from '../types'
import Navbar from "../components/navbar"
import Place from '../components/place'
import { useAppContext } from '../context'
import { handleRefreshSubmit } from '../services/update_services'

const index = () => {
  const context = useAppContext()// overall app context
  
  const params = useLocalSearchParams<{city_id: string;}>()//page context
  const [refreshKey, setRefreshKey] = useState(0);
  const [refresh_data, setRefreshData] = useState<RefreshDataRequest>()

  useEffect(() => {
    if(params.city_id === "u"){
      context.setCurrentCity(null)
    }
    else if (context.saved_cities !== null){
      const len = context.saved_cities.length
      for(let i = 0; i < len; i++){
        if(context.saved_cities[i].id == params.city_id){
          context.setCurrentCity(context.saved_cities[i])
          setRefreshData({
            id: context.saved_cities[i].id,
            lat: context.saved_cities[i].location.lat, 
            lng: context.saved_cities[i].location.lng
          })
          break
        }
      }
    }
    
  }, [params.city_id])

  return (
    <SafeAreaView  style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {params.city_id ? (
        <View>
          <TouchableOpacity style={styles.refreshButton} onPress={() => {
            handleRefreshSubmit(refresh_data, context)
            setRefreshKey(prev => prev + 1)
            console.log('refresh')
          }}>
  <Text style={styles.refreshButtonText}>Refresh</Text>
  <Ionicons name="refresh" size={20} color="#007AFF" style={styles.refreshIcon} />
</TouchableOpacity>
          <Place city_id={params.city_id} refresh_key={refreshKey}/>
        </View>
      ) :(
        <View>
        <Text style={styles.title}>Ether Status</Text>
        </View>
      )}
    </ScrollView>
    <Navbar/>
    </SafeAreaView >
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 50, // makes space for Navbar
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 5,
    boxShadow: '4px 4px rgba(0,0,0,0,1)',
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // centers text + icon horizontally
    backgroundColor: '#f0f8ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 12,
    alignSelf: 'center', // centers button container in parent
    minWidth: 140,
  },
  refreshButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  refreshIcon: {
    marginLeft: 8, // space between text and icon
  },
})