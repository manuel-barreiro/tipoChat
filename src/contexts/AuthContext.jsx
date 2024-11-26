import { createContext, useContext, useState } from "react"
import { loggedUser } from "@/static/mockData"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser] = useState(loggedUser)

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
