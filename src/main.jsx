import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Root from "./routes/root"
import Login from "./routes/login.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "onboarding",
        element: <div>Onboarding</div>,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
