import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/routes/root/Root"
import Onboarding from "@/components/routes/onboarding/Onboarding"
import SignUp from "@/components/routes/signUp/SignUp"
import SignIn from "@/components/routes/signIn/SignIn"
import AdminProfile from "@/components/routes/profile/AdminProfile"
import ErrorPage from "@/components/common/ErrorPage.jsx"
import ManageProfile from "./components/routes/manage-profile/ManageProfile"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/common/Layout"
import "./index.css"

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
        path: "profile",
        element: <AdminProfile />,
      },
      {
        path: "edit-profile",
        element: <ManageProfile />,
      },
      // Add more routes here as needed
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
