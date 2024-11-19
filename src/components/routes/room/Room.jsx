import React from "react"
import BottomMenu from "./components/chat/BottomMenu"
import Header from "../../common/search-bar/SearchHeader"
import Stream from "./components/Stream"
import Chat from "./components/chat/Chat"
import HamburgerMenu from "@/components/common/buttons/HamburgerMenu"

// Mock auth context - in real app, use proper auth context/provider
const useAuth = () => {
  // Mock user data - replace with real auth logic
  return {
    user: {
      id: "123",
      name: "Test User",
      role: "admin", // or "user"
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
      <Header button={<HamburgerMenu />} />

      <Stream user={user} />

      <Chat />

      <BottomMenu user={user} />
    </>
  )
}

export default Room
