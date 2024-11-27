import { createContext, useContext, useState } from "react"
import { findUserById } from "@/static/database"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser] = useState(findUserById("1"))

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
