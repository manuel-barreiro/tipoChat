import { ShareIcon, SettingsIcon } from "@/assets/icons"
import { Link } from "react-router-dom"

export const navbarConfig = {
  "/profile": {
    title: "My Profile",
    rightContent: (
      <div className="flex items-center gap-4">
        <button className="text-heading-4 hover:text-primary focus:text-primary">
          <ShareIcon className="h-6 w-6" />
        </button>
        <Link
          to="/profile/manage"
          className="text-heading-4 hover:text-primary focus:text-primary"
        >
          <SettingsIcon className="h-6 w-6" />
        </Link>
      </div>
    ),
  },
  "/profile/manage": {
    title: "Manage Profile",
    rightContent: null,
  },
  "/profile/manage/reset-password": {
    title: "Create New Password",
    rightContent: null,
  },
  "/profile/manage/links": {
    title: "Manage Your Links",
    rightContent: null,
  },
}
