import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-dark-1">
      <div className="flex h-[100%] w-[430px] flex-col justify-center border bg-dark-1">
        <Outlet />
      </div>
    </main>
  )
}
