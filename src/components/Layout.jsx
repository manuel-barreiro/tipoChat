import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <body className="flex h-screen w-full items-center justify-center bg-dark-1">
      <main className="h-[100%] w-[430px] bg-dark-1">
        <Outlet />
      </main>
    </body>
  )
}
