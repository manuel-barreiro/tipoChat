import { ChatIcon, WalletIcon, StarIcon, LogoutIcon } from "@/assets/icons"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"

export default function AdminMenu() {
  return (
    <div className="flex w-full max-w-[90%] flex-col gap-6">
      <AdminMenuButton Icon={ChatIcon} text="Chat Rooms" />
      <AdminMenuButton Icon={WalletIcon} text="Wallet" />
      <AdminMenuButton Icon={StarIcon} text="Community" />
      <AdminMenuButton Icon={LogoutIcon} text="Log out" />
    </div>
  )
}
