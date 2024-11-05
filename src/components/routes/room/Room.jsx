import React from "react"
import BottomMenu from "./components/BottomMenu"
import Header from "./components/Header"
import Stream from "./components/Stream"
import Chat from "./components/Chat"

// Mock auth context - in real app, use proper auth context/provider
const useAuth = () => {
  // Mock user data - replace with real auth logic
  return {
    user: {
      id: "123",
      name: "Test User",
      role: "user", // or "user"
      avatar: "/images/mockUser.png",
    },
    isAuthenticated: true,
  }
}

// Main chat component
const Room = () => {
  const { user } = useAuth()

  return (
    <>
      <Header />

      <Stream user={user} />

      <Chat />

      <BottomMenu user={user} />
    </>
  )
}

export default Room
