import { City } from './types';

export const fakeCities: City[] = [
  {
    id: "1",
    name: "Phoenix",
    weather_data: {
      location_id: "1",
      temperature: 105,
      conditions: "Sunny",
      humidity: 15,
      wind_speed: 12,
      uv_index: 10,
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "2",
    name: "Seattle",
    weather_data: {
      location_id: "2",
      temperature: 68,
      conditions: "Cloudy",
      humidity: 80,
      wind_speed: 9,
      uv_index: 5,
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "3",
    name: "Denver",
    weather_data: {
      location_id: "3",
      temperature: 78,
      conditions: "Partly Cloudy",
      humidity: 40,
      wind_speed: 10,
      uv_index: 8,
      created_at: new Date().toISOString(),
    },
  },
  {
    id: "4",
    name: "Miami",
    weather_data: {
      location_id: "4",
      temperature: 92,
      conditions: "Humid",
      humidity: 85,
      wind_speed: 14,
      uv_index: 11,
      created_at: new Date().toISOString(),
    },
  },
];
