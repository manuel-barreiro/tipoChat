import { createContext, useContext, useState } from "react"
import { loggedUser } from "@/static/loggedUser"

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [currentUser] = useState({
    ...loggedUser,
    id: "123", // Current logged-in user ID
  })

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
