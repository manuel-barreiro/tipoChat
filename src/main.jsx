import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/routes/root/Root"
import Onboarding from "@/components/routes/onboarding/Onboarding"
import SignUp from "@/components/routes/signUp/SignUp"
import SignIn from "@/components/routes/signIn/SignIn"
import Profile from "@/components/routes/profile/Profile"
import ErrorPage from "@/components/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
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
        element: <Profile />,
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
