import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <main className="flex h-auto w-full items-center justify-center bg-dark-1">
      <div className="flex h-auto min-h-[100dvh] w-full max-w-[430px] flex-col justify-center bg-dark-1 px-6 py-6">
        <Outlet />
      </div>
    </main>
  )
}
