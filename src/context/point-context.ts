import {createContext} from 'react'

export const SetNameContext = createContext((name:string)=>{})
export const PointContext = createContext<string>("");
export const RoleContext = createContext<string>("");
export const ContentContext = createContext<string>("");
export const TechnologyContext = createContext<string>("");