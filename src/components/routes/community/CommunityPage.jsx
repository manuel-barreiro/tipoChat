import React from "react"
import UserDisplay from "./components/UserDisplay"
import { useLocation } from "react-router-dom"

const mockUser = {
  nickName: "TalesWire",
  followers: "265K",
  subPrice: 10,
  profilePic: "/images/mockProfilePic.png",
}

export default function CommunityPage() {
  const { pathname } = useLocation()

  return (
    <section className="flex w-full flex-col gap-6">
      <h1 className="text-body-medium uppercase text-gray-500">
        {pathname === "/community/subscribers" && "Your Subscribers"}
        {pathname === "/community/subscriptions" && "Your Subscriptions"}
        {pathname === "/community/followers" && "Look who is following you"}
        {pathname === "/community/following" && "Look who you follow"}
        {pathname === "/community/banned" && "Banned Users"}
      </h1>
      <div className="flex w-full flex-col gap-5">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <UserDisplay key={i} {...mockUser} pathname={pathname} />
          ))}
      </div>
    </section>
  )
}
