import { City } from '../types'
import * as Location from 'expo-location'

async function get_user_location(): Promise<City | undefined> {
  const user_coords = await get_user_coords()
  const post_data = { user_coords }

  const res = await fetch(`https://ether-stat-backend.vercel.app/search/uloc`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post_data)
  })

  return res.json()
}

async function get_user_coords() {
  const { status } = await Location.requestForegroundPermissionsAsync()
  if (status !== 'granted') {
    throw new Error('Permission to access location was denied')
  }

  const location = await Location.getCurrentPositionAsync({})
  const { latitude, longitude } = location.coords
  return { latitude, longitude }
}

export default get_user_location