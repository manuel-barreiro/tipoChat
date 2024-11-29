import React from "react"
import { useParams, Navigate } from "react-router-dom"
import BottomMenu from "./components/chat/BottomMenu"
import Header from "../../common/search-bar/SearchHeader"
import Stream from "./components/Stream"
import Chat from "./components/chat/Chat"
import HamburgerMenu from "@/components/common/buttons/HamburgerMenu"
import { useAuth } from "@/contexts/AuthContext"
import { findRoomById } from "@/static/database"
import { Link } from "react-router-dom"

const Room = () => {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const room = findRoomById(id)
  // Handle non-existent room
  if (!room) {
    return <Navigate to="/home" replace />
  }

  // Check if user is room owner
  const isOwner = room.owner === currentUser.id

  return (
    <>
      <Header
        button={
          <Link to={"/home"}>
            <HamburgerMenu />
          </Link>
        }
      />
      <Stream room={room} isOwner={isOwner} />
      <Chat room={room} />
      <BottomMenu user={currentUser} isOwner={isOwner} />
    </>
  )
}

export default Room
