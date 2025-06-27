import { City } from './types';

export const fakeCities: City[] = [
{
  id: "city-001",
  name: "Maple Ridge",
  location: {
    id: "loc-001",
    name: "Maple Ridge",
    lat: 40.7128,
    lng: -74.0060,
    county_name: "Hudson County",
    fips_codes: {
      county: "017",
      state: "34"
    },
    created_at: "2025-06-27T10:00:00Z",
    updated_at: "2025-06-27T10:00:00Z"
  },
  weather_data: {
    location_id: "loc-001",
    conditions: "Partly Cloudy",
    temperature: {
      main: 76,
      feels_like: 78,
      min: 68,
      max: 82
    },
    humidity: 63,
    wind: {
      direction: {
        degrees: 210,
        cardinal: "SW"
      },
      speed: 12,
      gust: 18,
      chill: 74
    },
    thunder_storm: 0.2,
    visibility: 10,
    uv_index: 5,
    created_at: "2025-06-27T10:00:00Z"
  },
  aqi_data: {
    location_id: "loc-001",
    aqi: 42,
    category: "Good",
    dom: "PM2.5",
    created_at: "2025-06-27T10:00:00Z"
  },
  demographics: {
    location_id: "loc-001",
    population: 94532,
    median_hh_income: 67200,
    employment_rate: 94.2,
    total_housing: 31200,
    year: 2024,
    created_at: "2025-06-27T10:00:00Z",
    updated_at: "2025-06-27T10:00:00Z"
  }
},
{
  id: "city-002",
  name: "Sagehill",
  location: {
    id: "loc-002",
    name: "Sagehill",
    lat: 34.0522,
    lng: -118.2437,
    county_name: "Los Angeles County",
    fips_codes: {
      county: "037",
      state: "06"
    },
    created_at: "2025-06-27T10:05:00Z",
    updated_at: "2025-06-27T10:05:00Z"
  },
  weather_data: {
    location_id: "loc-002",
    conditions: "Sunny",
    temperature: {
      main: 88,
      feels_like: 89,
      min: 70,
      max: 91
    },
    humidity: 30,
    wind: {
      direction: {
        degrees: 90,
        cardinal: "E"
      },
      speed: 9,
      gust: 14,
      chill: 85
    },
    thunder_storm: 0,
    visibility: 12,
    uv_index: 9,
    created_at: "2025-06-27T10:05:00Z"
  },
  aqi_data: {
    location_id: "loc-002",
    aqi: 78,
    category: "Moderate",
    dom: "O3",
    created_at: "2025-06-27T10:05:00Z"
  },
  demographics: {
    location_id: "loc-002",
    population: 3894000,
    median_hh_income: 65400,
    employment_rate: 91.7,
    total_housing: 1370000,
    year: 2024,
    created_at: "2025-06-27T10:05:00Z",
    updated_at: "2025-06-27T10:05:00Z"
  }
},
{
  id: "city-003",
  name: "Cedar Falls",
  location: {
    id: "loc-003",
    name: "Cedar Falls",
    lat: 41.8781,
    lng: -93.0977,
    county_name: "Polk County",
    fips_codes: {
      county: "153",
      state: "19"
    },
    created_at: "2025-06-27T10:10:00Z",
    updated_at: "2025-06-27T10:10:00Z"
  },
  weather_data: {
    location_id: "loc-003",
    conditions: "Thunderstorms",
    temperature: {
      main: 68,
      feels_like: 66,
      min: 62,
      max: 75
    },
    humidity: 85,
    wind: {
      direction: {
        degrees: 160,
        cardinal: "SSE"
      },
      speed: 15,
      gust: 24,
      chill: 64
    },
    thunder_storm: 0.9,
    visibility: 5,
    uv_index: 3,
    created_at: "2025-06-27T10:10:00Z"
  },
  aqi_data: {
    location_id: "loc-003",
    aqi: 59,
    category: "Moderate",
    dom: "PM10",
    created_at: "2025-06-27T10:10:00Z"
  },
  demographics: {
    location_id: "loc-003",
    population: 132000,
    median_hh_income: 59000,
    employment_rate: 92.4,
    total_housing: 51200,
    year: 2024,
    created_at: "2025-06-27T10:10:00Z",
    updated_at: "2025-06-27T10:10:00Z"
  }
}];
