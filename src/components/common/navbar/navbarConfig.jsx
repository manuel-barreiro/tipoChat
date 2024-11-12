import { ShareIcon, SettingsIcon } from "@/assets/icons"
import { Link } from "react-router-dom"

export const navbarConfig = {
  "/my-rooms": {
    title: "My Rooms",
    rightContent: null,
  },
  "/my-rooms/create": {
    title: "Create Room",
    rightContent: null,
  },
  "/my-rooms/edit": {
    title: "Edit Room",
    rightContent: null,
  },

  "/forgot-password": {
    title: "Password Recovery",
    rightContent: null,
  },
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
  "/posts/admin": {
    title: "My Posts",
    rightContent: null,
  },
  "/posts/user": {
    title: "Posts",
    rightContent: null,
  },
  "/posts/admin/create": {
    title: "Create Post",
    rightContent: null,
  },
  "/posts/admin/edit": {
    title: "Edit Post",
    rightContent: null,
  },
  "/posts/view/": {
    title: "My Gaming Post",
    rightContent: null,
  },
  "/wallet": {
    title: "Your Wallet",
    rightContent: null,
  },
  "/wallet/buy-points": {
    title: "Buy Points",
    rightContent: null,
  },
  "/wallet/choose-crypto-network": {
    title: "Choose Network",
    rightContent: null,
  },
  "/community": {
    title: "Your Community",
    rightContent: null,
  },
  "/community/subscribers": {
    title: "Your Community",
    rightContent: null,
  },
  "/community/subscriptions": {
    title: "Your Community",
    rightContent: null,
  },
  "/community/followers": {
    title: "Your Community",
    rightContent: null,
  },
  "/community/following": {
    title: "Your Community",
    rightContent: null,
  },
  "/community/banned": {
    title: "Your Community",
    rightContent: null,
  },
  "/room/:id/go-live": {
    title: "Go Live",
    rightContent: null,
  },
  "/room/:id/go-live/live-encoder": {
    title: "Streaming - Live Encoder",
    rightContent: null,
  },
  "/room/:id/go-live/live-mic": {
    title: "Streaming - Mic Live",
    rightContent: null,
  },
  "/help": {
    title: "Help Center",
    rightContent: null,
  },
  "/help/about": {
    title: "About TipoChat",
    rightContent: null,
  },
}
