import { City } from '../types'

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

function get_user_coords(){
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const {latitude, longitude} = position.coords
            resolve({latitude, longitude})
        },
        (error) => {
            reject(error)
        }
        )
    })
}

export default get_user_location