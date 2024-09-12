import {
  ChatIcon,
  WalletIcon,
  StarIcon,
  LogoutIcon,
  RightArrow,
} from "@/assets/icons"

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

function AdminMenuButton({ Icon, text }) {
  return (
    <button className="flex items-center justify-between text-heading-6 font-bold">
      <span className="flex items-center gap-2">
        <Icon className="h-6 w-6" />
        {text}
      </span>
      <RightArrow className="h-6 w-6" />
    </button>
  )
}
