import { createContext, useContext } from "react";
import { AppContext } from './types'

export const Context = createContext<AppContext | undefined>(undefined)

export function useAppContext() {
    const c = useContext(Context)
    if(c == undefined){
        throw new Error("useAppContext must be used with a Context for overall app")
    }
    if(!c.saved_cities_set){
        c.saved_cities_set = new Set()
    }
    return c
}