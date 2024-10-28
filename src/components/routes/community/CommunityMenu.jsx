import React from "react"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"

export default function CommunityMenu() {
  return (
    <section className="flex flex-col gap-7">
      <h1 className="text-body-medium uppercase">Manage your community</h1>
      <ul className="flex flex-col gap-5">
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton
            text="My Subscribers"
            link={"/community/subscribers"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 px-4 py-6">
          <AdminMenuButton
            text="My Subscriptions"
            link={"/community/subscriptions"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton text="My Followers" link={"/community/followers"} />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton text="Following" link={"/community/following"} />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton text="Banned Users" link={"/community/banned"} />
        </div>
      </ul>
    </section>
  )
}
