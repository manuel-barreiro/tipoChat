import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/routes/root/Root"
import Onboarding from "@/components/routes/onboarding/Onboarding"
import SignUp from "@/components/routes/sign-up/SignUp"
import SignIn from "@/components/routes/sign-in/SignIn"
import ForgotPassword from "@/components/routes/forgot-password/ForgotPassword"
import AdminProfile from "@/components/routes/profile/AdminProfile"
import ErrorPage from "@/components/common/ErrorPage.jsx"
import ManageProfile from "@/components/routes/profile/manage/ManageProfile"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "@/components/common/Layout"
import AdminProfileLayout from "@/components/routes/profile/AdminProfileLayout"
import "@/index.css"
import ResetPassword from "@/components/routes/profile/manage/reset-password/ResetPassword"
import ManageLinks from "@/components/routes/profile/manage/links/ManageLinks"
import MyRooms from "@/components/routes/my-rooms/MyRooms"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
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
        path: "profile",
        element: <AdminProfileLayout />,
        children: [
          {
            path: "",
            element: <AdminProfile />,
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
        element: <MyRooms />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
