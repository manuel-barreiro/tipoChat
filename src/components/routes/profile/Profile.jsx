import { useParams } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { findUserById, findRoomsByUserId } from "@/static/database"
import UserInfo from "./components/UserInfo"
import { Outlet } from "react-router-dom"
import PointsCard from "@/components/common/cards/PointsCard"
import AdminMenu from "./components/AdminMenu"
import TipoChatFooter from "./components/TipoChatFooter"
import UserActions from "./UserActions"
import ToggleRoomsAndLinks from "./user/components/ToggleRoomsAndLinks"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ProfileSkeleton from "./ProfileSkeleton"

export default function Profile() {
  const { id } = useParams()
  const { currentUser } = useAuth()
  const [isLoading, setIsLoading] = useState(true)

  const isOwnProfile = !id || id === currentUser.id
  const profileData = isOwnProfile ? currentUser : findUserById(id)

  if (!isOwnProfile && !profileData) {
    return <Navigate to="/home" replace />
  }

  const userRooms = findRoomsByUserId(profileData.id)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <ProfileSkeleton />
  }

  return (
    <section className="flex flex-col items-center gap-8">
      {isOwnProfile && <Outlet />}

      <UserInfo
        name={profileData.fullName}
        nickName={profileData.nickName}
        profilePicUrl={profileData.profilePicUrl}
        isVerified={profileData.isVerified}
        followers={profileData.data.followers}
        following={profileData.data.following}
      />

      {isOwnProfile ? (
        <>
          <PointsCard
            points={profileData.data.points}
            subscriptions={profileData.data.subscriptions}
            subscribers={profileData.data.subscribers}
            subscriptionPrice={profileData.data.subscriptionPrice}
          />
          <AdminMenu />
          <TipoChatFooter />
        </>
      ) : (
        <div className="flex w-full flex-col items-center gap-5">
          <UserActions user={profileData} />
          <ToggleRoomsAndLinks
            userId={profileData.id}
            rooms={userRooms}
            links={profileData.links}
          />
        </div>
      )}
    </section>
  )
}
