import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "@/components/root/Root"
import SignUp from "@/components/signUp/SignUp"
import SignIn from "@/components/signIn/SignIn"
import ErrorPage from "@/components/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
