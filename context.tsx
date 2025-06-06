import { createContext } from "react";

export interface User{
    id: string;
    name: string;
    saved_cities: [string];
}

export const AppContext = createContext<User | undefined>(undefined)