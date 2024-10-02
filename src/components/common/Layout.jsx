import { Outlet } from "react-router-dom"
import NavBar from "./navbar/NavBar"

export default function Layout() {
  return (
    <main className="flex h-auto w-full items-center justify-center bg-dark-1">
      <div className="relative flex h-auto min-h-[100dvh] w-full max-w-[430px] flex-col bg-dark-1">
        <NavBar />
        <div className="mb-24 mt-20 h-full px-6 pb-6">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
