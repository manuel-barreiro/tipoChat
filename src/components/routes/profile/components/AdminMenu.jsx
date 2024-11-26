import { ChatIcon, WalletIcon, StarIcon, LogoutIcon } from "@/assets/icons"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"
import LogOutDrawer from "@/components/routes/profile/components/LogOutDrawer"
import { useState } from "react"
import { RightArrow } from "@/assets/icons"
import { useTranslation } from "react-i18next"

export default function AdminMenu() {
  const { t } = useTranslation()
  const [isLogOutOpen, setIsLogOutOpen] = useState(false)
  return (
    <>
      <div className="flex w-full max-w-[90%] flex-col gap-6">
        <AdminMenuButton
          Icon={ChatIcon}
          text={t("profile.admin.adminMenu.chatRooms")}
          link={"/my-rooms"}
        />
        <AdminMenuButton
          Icon={WalletIcon}
          text={t("profile.admin.adminMenu.wallet")}
          link={"/wallet"}
        />
        <AdminMenuButton
          Icon={StarIcon}
          text={t("profile.admin.adminMenu.community")}
          link={"/community"}
        />
        <button
          onClick={() => setIsLogOutOpen(true)}
          className="flex w-full items-center justify-between text-heading-6 font-bold"
        >
          <span className="flex items-center gap-2">
            <LogoutIcon className="h-6 w-6" />
            {t("profile.admin.adminMenu.logOut")}
          </span>
          <RightArrow className="h-6 w-6" />
        </button>
      </div>
      <LogOutDrawer isOpen={isLogOutOpen} setIsOpen={setIsLogOutOpen} />
    </>
  )
}
