import React from "react"
import { useTranslation } from "react-i18next"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"

export default function CommunityMenu() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-7">
      <h1 className="text-body-medium uppercase">{t("community.title")}</h1>
      <ul className="flex flex-col gap-5">
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton
            text={t("community.menu.subscribers")}
            link={"/community/subscribers"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 px-4 py-6">
          <AdminMenuButton
            text={t("community.menu.subscriptions")}
            link={"/community/subscriptions"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton
            text={t("community.menu.followers")}
            link={"/community/followers"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton
            text={t("community.menu.following")}
            link={"/community/following"}
          />
        </div>
        <div className="border-b-[1px] border-dark-3 p-4 py-6">
          <AdminMenuButton
            text={t("community.menu.bannedUsers")}
            link={"/community/banned"}
          />
        </div>
      </ul>
    </section>
  )
}
