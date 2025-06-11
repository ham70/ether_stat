import { Stack } from "expo-router"
import { Context } from "../context"
import Ract, {useState} from 'react'
import { User, City } from '../types'
import { fakeCities } from "../cities"

export default function Layout() {
    //overall app state -------------------------------------------------
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLocationEnabled, setIsLocationEnabled] = useState<boolean>(false);
    const [currentCity, setCurrentCity] = useState<City | null>(null);
    const [savedCities, setSavedCities] = useState<City[]>(fakeCities);

    const contextValue = {
      user: user,
      is_logged_in: isLoggedIn,
      location_enabled: isLocationEnabled,
      current_city: currentCity,
      saved_cities: savedCities,

      setUser: setUser,
      setIsLoggedIn: setIsLoggedIn,
      setIsLocationEnabled: setIsLocationEnabled,
      setCurrentCity: setCurrentCity,
      setSavedCities: setSavedCities
    }

    return (
      <Context.Provider value={contextValue}>
        <Stack/>
      </Context.Provider>
    )
}