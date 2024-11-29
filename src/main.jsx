import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/routes/root/Root"
import Onboarding from "@/components/routes/onboarding/Onboarding"
import SignUp from "@/components/routes/sign-up/SignUp"
import SignIn from "@/components/routes/sign-in/SignIn"
import ForgotPassword from "@/components/routes/forgot-password/ForgotPassword"
import ErrorPage from "@/components/common/ErrorPage.jsx"
import ManageProfile from "@/components/routes/profile/manage/ManageProfile"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "@/components/common/Layout"
import ProfileLayout from "@/components/routes/profile/ProfileLayout"
import "@/index.css"
import ResetPassword from "@/components/routes/profile/manage/reset-password/ResetPassword"
import ManageLinks from "@/components/routes/profile/manage/links/ManageLinks"
import MyRooms from "@/components/routes/my-rooms/MyRooms"
import MyRoomsLayout from "@/components/routes/my-rooms/MyRoomsLayout"
import CreateRoom from "@/components/routes/my-rooms/components/CreateRoom"
import EditRoom from "@/components/routes/my-rooms/components/EditRoom"
import CreatePost from "@/components/routes/posts/admin/create/CreatePost"
import EditPost from "@/components/routes/posts/admin/edit/EditPost"
import PostView from "@/components/routes/posts/PostView"
import MyWalletLayout from "@/components/routes/wallet/MyWalletLayout"
import Wallet from "@/components/routes/wallet/Wallet"
import BuyPoints from "@/components/routes/wallet/components/BuyPoints"
import ChooseCryptoNetwork from "@/components/routes/wallet/components/ChooseCryptoNetwork"
import CommunityLayout from "@/components/routes/community/CommunityLayout"
import CommunityMenu from "@/components/routes/community/CommunityMenu"
import CommunityPage from "@/components/routes/community/CommunityPage"
import RoomLayout from "@/components/routes/room/RoomLayout"
import Room from "@/components/routes/room/Room"
import StartStreaming from "@/components/routes/room/components/go-live/StartStreaming"
import LiveEncoder from "@/components/routes/room/components/go-live/live-encoder/LiveEncoder"
import LiveMic from "@/components/routes/room/components/go-live/live-mic/LiveMic"
import HelpCenter from "@/components/routes/help/HelpCenter"
import About from "@/components/routes/help/About"
import { SearchResults } from "@/components/routes/search/SearchResults"
import Home from "@/components/routes/home/Home"
import { LanguageProvider } from "@/contexts/LanguageContext"
import Profile from "@/components/routes/profile/Profile"
import { AuthProvider } from "@/contexts/AuthContext"
import RoomPosts from "@/components/routes/posts/RoomPosts"

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "onboarding",
        element: <Onboarding />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: ":id",
            element: <Profile />,
          },
          {
            path: "manage",
            element: <ManageProfile />,
          },
          {
            path: "manage/reset-password",
            element: <ResetPassword />,
          },
          {
            path: "manage/links",
            element: <ManageLinks />,
          },
        ],
      },
      {
        path: "my-rooms",
        element: <MyRoomsLayout />,
        children: [
          {
            path: "",
            element: <MyRooms />,
          },
          {
            path: "create",
            element: <CreateRoom />,
          },
          {
            path: "edit",
            element: <EditRoom />,
          },
        ],
      },

      {
        path: "wallet",
        element: <MyWalletLayout />,
        children: [
          {
            path: "",
            element: <Wallet />,
          },
          {
            path: "buy-points",
            element: <BuyPoints />,
          },
          {
            path: "buy-points/choose-crypto-network",
            element: <ChooseCryptoNetwork />,
          },
        ],
      },
      {
        path: "community",
        element: <CommunityLayout />,
        children: [
          {
            path: "",
            element: <CommunityMenu />,
          },
          {
            path: "subscribers",
            element: <CommunityPage />,
          },
          {
            path: "following",
            element: <CommunityPage />,
          },
          {
            path: "followers",
            element: <CommunityPage />,
          },
          {
            path: "subscriptions",
            element: <CommunityPage />,
          },
          {
            path: "banned",
            element: <CommunityPage />,
          },
        ],
      },
      {
        path: "room",
        element: <RoomLayout />,
        children: [
          {
            path: ":id",
            element: <Room />,
          },
          {
            path: ":id/go-live",
            element: <StartStreaming />,
          },
          {
            path: ":id/go-live/live-encoder",
            element: <LiveEncoder />,
          },
          {
            path: ":id/go-live/live-mic",
            element: <LiveMic />,
          },
          {
            path: ":id/posts",
            element: <RoomPosts />,
          },
          {
            path: ":id/posts/:postId",
            element: <PostView />,
          },
          {
            path: ":id/posts/:postId/edit",
            element: <EditPost />,
          },
          {
            path: ":id/posts/create",
            element: <CreatePost />,
          },
        ],
      },
      {
        path: "help",
        element: <HelpCenter />,
      },
      {
        path: "help/about",
        element: <About />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LanguageProvider>
  </StrictMode>
)
