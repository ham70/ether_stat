import { BuildCacheProviderPlugin } from "expo/config";

export interface User {
    id: string;
    name: string;
    saved_city_names: string[];
}

export interface City {
    id: string;
    name: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    temperature: number;
    weather: String;
    elevation: number;
    pollen_count: number;
    aqi: number;
    uvi: number;
    crime_rate: number;
    population_size: number;
    homelessness_rate: number;
}

export interface AppContext {
    user: User | null;
    is_logged_in: boolean;
    location_enabled: boolean;
    current_city: City | null;
    saved_cities: City[];

    setUser: (user: User | null) => void;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setIsLocationEnabled: (enabled: boolean) => void;
    setCurrentCity: (city: City | null) => void;
    setSavedCities: (cities: City[]) => void;
}