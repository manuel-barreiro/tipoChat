// components/routes/profile/Profile.jsx
import { useParams } from "react-router-dom"
import { useAuth } from "@/contexts/AuthContext"
import { findUserById } from "@/static/mockDatabase"
import UserInfo from "@/components/routes/profile/components/UserInfo"
import { Outlet } from "react-router-dom"
import PointsCard from "@/components/common/cards/PointsCard"
import AdminMenu from "@/components/routes/profile/components/AdminMenu"
import TipoChatFooter from "@/components/routes/profile/components/TipoChatFooter"
import UserActions from "@/components/routes/profile/UserActions"
import ToggleRoomsAndLinks from "./user/components/ToggleRoomsAndLinks"

export default function Profile() {
  const { id } = useParams()
  const { currentUser } = useAuth()

  const isOwnProfile = !id || id === currentUser.id
  const profileData = isOwnProfile ? currentUser : findUserById(id)

  if (!isOwnProfile && !profileData) {
    return <div>User not found</div>
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
        // Other user profile view with subscribe/follow buttons
        <div className="flex w-full flex-col items-center gap-5">
          <UserActions user={profileData} />

          <ToggleRoomsAndLinks
            rooms={profileData.rooms}
            links={profileData.links}
          />
        </div>
      )}
    </section>
  )
}
