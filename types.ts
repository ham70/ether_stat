import { BuildCacheProviderPlugin } from "expo/config";

export interface User {
    id: string;
    name: string;
    saved_city_names: string[];
}

export interface LocationData {
  id: string;
  name: string;
  full_address: string;
  lat: number;
  lng: number;
  county_name: string;
  fips_codes: {
    county: string;
    state: string;
  }
  created_at: string;
  updated_at: string;
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
export interface AirQualityData {
  location_id: string;
  aqi: number;
  category: string;
  dom: string;
  created_at: string;
}
export interface DemographicData {
  location_id: string;
  population: number;
  median_hh_income: number;
  employment_rate: number;
  total_housing: number;
  year: number;
  created_at: string;
  updated_at: string;
}

export interface City {
  id:string;
  name: string;
  location: LocationData;
  weather_data: WeatherData;
  aqi_data: AirQualityData;
  demographics: DemographicData;
}

export interface RefreshDataRequest {
  id: string;
  lat: number;
  lng: number;
}
export interface RefreshDataResponse {
  id: string;
  weather_data: WeatherData;
  aqi_data: AirQualityData;
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

export interface searchSuggestions {
  locations: string[];
  ids: string[];
}