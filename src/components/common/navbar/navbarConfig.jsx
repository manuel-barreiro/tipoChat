import { ShareIcon, SettingsIcon } from "@/assets/icons"
import { Link } from "react-router-dom"

export const navbarConfig = {
  "/my-rooms": {
    titleKey: "navbar.myRooms",
    rightContent: null,
  },
  "/my-rooms/create": {
    titleKey: "navbar.createRoom",
    rightContent: null,
  },
  "/my-rooms/edit": {
    titleKey: "navbar.editRoom",
    rightContent: null,
  },
  "/forgot-password": {
    titleKey: "navbar.passwordRecovery",
    rightContent: null,
  },
  "/profile": {
    titleKey: "navbar.myProfile",
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
    titleKey: "navbar.manageProfile",
    rightContent: null,
  },
  "/profile/manage/reset-password": {
    titleKey: "navbar.createNewPassword",
    rightContent: null,
  },
  "/profile/manage/links": {
    titleKey: "navbar.manageLinks",
    rightContent: null,
  },
  "/posts/admin": {
    titleKey: "navbar.myPosts",
    rightContent: null,
  },
  "/posts/user": {
    titleKey: "navbar.posts",
    rightContent: null,
  },
  "/posts/admin/create": {
    titleKey: "navbar.createPost",
    rightContent: null,
  },
  "/posts/admin/edit": {
    titleKey: "navbar.editPost",
    rightContent: null,
  },
  "/posts/view/": {
    titleKey: "navbar.myGamingPost",
    rightContent: null,
  },
  "/wallet": {
    titleKey: "navbar.yourWallet",
    rightContent: null,
  },
  "/wallet/buy-points": {
    titleKey: "navbar.buyPoints",
    rightContent: null,
  },
  "/wallet/choose-crypto-network": {
    titleKey: "navbar.chooseNetwork",
    rightContent: null,
  },
  "/community": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/community/subscribers": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/community/subscriptions": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/community/followers": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/community/following": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/community/banned": {
    titleKey: "navbar.yourCommunity",
    rightContent: null,
  },
  "/room/:id/posts": {
    titleKey: "navbar.posts",
    rightContent: null,
  },
  "/room/:id/posts/create": {
    titleKey: "navbar.createPost",
    rightContent: null,
  },
  "/room/:id/posts/:id": {
    titleKey: "navbar.myGamingPost",
    rightContent: null,
  },
  "/room/:id/posts/:id/edit": {
    titleKey: "navbar.editPost",
    rightContent: null,
  },
  "/room/:id/go-live": {
    titleKey: "navbar.goLive",
    rightContent: null,
  },
  "/room/:id/go-live/live-encoder": {
    titleKey: "navbar.streamingLiveEncoder",
    rightContent: null,
  },
  "/room/:id/go-live/live-mic": {
    titleKey: "navbar.streamingMicLive",
    rightContent: null,
  },
  "/help": {
    titleKey: "navbar.helpCenter",
    rightContent: null,
  },
  "/help/about": {
    titleKey: "navbar.aboutTipoChat",
    rightContent: null,
  },
}
