import UserInfo from "./components/UserInfo"
import PointsCard from "@/components/common/cards/PointsCard"
import AdminMenu from "./components/AdminMenu"
import { mockUser } from "@/static/mockUser"
import TipoChatFooter from "./components/TipoChatFooter"
import { Outlet } from "react-router-dom"

export default function AdminProfile() {
  return (
    <section className="flex flex-col items-center gap-8">
      <Outlet />
      <UserInfo
        name={mockUser.fullName}
        nickName={mockUser.nickName}
        profilePicUrl={mockUser.profilePicUrl}
        isVerified={mockUser.isVerified}
        followers={mockUser.data.followers}
        following={mockUser.data.following}
      />
      <PointsCard
        points={mockUser.data.points}
        subscriptions={mockUser.data.subscriptions}
        subscribers={mockUser.data.subscribers}
        subscriptionPrice={mockUser.data.subscriptionPrice}
      />
      <AdminMenu />
      <TipoChatFooter />
    </section>
  )
}
