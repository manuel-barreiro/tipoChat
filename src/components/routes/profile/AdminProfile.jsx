import UserInfo from "./components/UserInfo"
import PointsCard from "./components/PointsCard"
import AdminMenu from "./components/AdminMenu"
import { mockUser } from "@/static/mockUser"
import TipoChatFooter from "./components/TipoChatFooter"

export default function AdminProfile() {
  return (
    <section className="flex flex-col items-center gap-8">
      <UserInfo
        name={mockUser.fullName}
        profilePicUrl={mockUser.profilePicUrl}
        isVerified={mockUser.isVerified}
        isMember={mockUser.isMember}
        followers={mockUser.data.followers}
        following={mockUser.data.following}
        subscribers={mockUser.data.subscribers}
        subscriptions={mockUser.data.subscriptions}
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
