import { BuildCacheProviderPlugin } from "expo/config";

export interface User {
    id: string;
    name: string;
    saved_city_names: string[];
}

export interface WeatherData {
  location_id: string;
  conditions: string;
  temperature: {
    main: number;
    feels_like: number;
    min: number;
    max: number;
  };
  humidity: number;
  wind: {
    direction: {
        degrees: number;
        cardinal: string;
    }
    speed: number;
    gust: number;
    chill: number;
  }
  thunder_storm: number;
  visibility: number;
  uv_index: number;
  created_at: string;
}

export interface City {
    id: string;//same a location_id on backend (essentially primary key)
    name: string;
    lat: number;
    lng: number;
    //threat_score: number;
    weather_data: WeatherData;
    //crime_rate: number;
    //population_size: number;
    //homelessness_rate: number;
}

export interface RefreshDataRequest {
    id: string;
    lat: number;
    lng: number;
}
export interface RefreshDataResponse {
    id: string;
    weather_data: WeatherData;
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