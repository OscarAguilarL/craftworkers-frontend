import { createContext, Dispatch, SetStateAction } from 'react'

export interface SessionContextProps {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

export const SessionContext = createContext<SessionContextProps>(
  {} as SessionContextProps
)
