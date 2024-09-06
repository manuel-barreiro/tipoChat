import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/root/Root"
import Onboarding from "@/components/onboarding/Onboarding"
import SignUp from "@/components/signUp/SignUp"
import SignIn from "@/components/signIn/SignIn"
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
      // Add more routes here as needed
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
