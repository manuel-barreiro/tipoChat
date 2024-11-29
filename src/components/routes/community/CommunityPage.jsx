import React from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

  const getTitle = () => {
    if (pathname === "/community/subscribers")
      return t("community.pageTitle.subscribers")
    if (pathname === "/community/subscriptions")
      return t("community.pageTitle.subscriptions")
    if (pathname === "/community/followers")
      return t("community.pageTitle.followers")
    if (pathname === "/community/following")
      return t("community.pageTitle.following")
    if (pathname === "/community/banned") return t("community.pageTitle.banned")
  }

  return (
    <section className="flex w-full flex-col gap-6">
      <h1 className="text-body-medium uppercase text-gray-500">{getTitle()}</h1>
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
