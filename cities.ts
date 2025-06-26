import { City } from './types';

export const fakeCities: City[] = [
  {
    id: "1",
    name: "init",
    lat: 1,
    lng: 7,
    weather_data: {
      location_id: "1",
      conditions: "Sunny",
      temperature: {
        main: 0,
        feels_like: 0,
        min: 0,
        max: 0,
      },
      humidity: 0,
      wind: {
        direction: {
          degrees: 0,
          cardinal: "E",
        },
        speed: 0,
        gust: 0,
        chill: 0,
      },
      thunder_storm: 0,
      visibility: 0,
      uv_index: 0,
      created_at: "beyond time",
    },
  },
  {
    id: "nyc-001",
    name: "New York City",
    lat: 40.7128,
    lng: -74.0060,
    weather_data: {
      location_id: "nyc-001",
      conditions: "Partly Cloudy",
      temperature: {
        main: 72,
        feels_like: 74,
        min: 68,
        max: 76,
      },
      humidity: 58,
      wind: {
        direction: {
          degrees: 210,
          cardinal: "SW",
        },
        speed: 12.4,
        gust: 18.2,
        chill: 70,
      },
      thunder_storm: 5,
      visibility: 10000,
      uv_index: 6,
      created_at: "2025-06-25T20:30:00Z",
    },
  },
  {
    id: "chi-002",
    name: "Chicago",
    lat: 41.8781,
    lng: -87.6298,
    weather_data: {
      location_id: "chi-002",
      conditions: "Thunderstorms",
      temperature: {
        main: 65,
        feels_like: 63,
        min: 60,
        max: 67,
      },
      humidity: 84,
      wind: {
        direction: {
          degrees: 135,
          cardinal: "SE",
        },
        speed: 8.3,
        gust: 21.5,
        chill: 61,
      },
      thunder_storm: 75,
      visibility: 3000,
      uv_index: 2,
      created_at: "2025-06-25T20:30:00Z",
    },
  },
  {
    id: "phx-003",
    name: "Phoenix",
    lat: 33.4484,
    lng: -112.0740,
    weather_data: {
      location_id: "phx-003",
      conditions: "Sunny",
      temperature: {
        main: 98,
        feels_like: 96,
        min: 89,
        max: 103,
      },
      humidity: 20,
      wind: {
        direction: {
          degrees: 90,
          cardinal: "E",
        },
        speed: 5.0,
        gust: 9.0,
        chill: 95,
      },
      thunder_storm: 0,
      visibility: 16000,
      uv_index: 9,
      created_at: "2025-06-25T20:30:00Z",
    },
  }
]
