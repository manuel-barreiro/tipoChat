import BackButton from "@/components/buttons/BackButton"
import { ShareIcon, SettingsIcon } from "@/assets/icons"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function NavBar() {
  let { pathname } = useLocation()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex h-12 w-full items-center justify-between bg-dark-1 py-8">
      <div className="flex items-center gap-2">
        <BackButton />
        {pathname === "/profile" && (
          <h1 className="text-heading-4">My Profile</h1>
        )}
      </div>

      {pathname === "/profile" && (
        <div className="flex items-center gap-4">
          <button className="text-heading-4 hover:text-primary focus:text-primary">
            <ShareIcon className="h-6 w-6" />
          </button>
          <button className="text-heading-4 hover:text-primary focus:text-primary">
            <SettingsIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </nav>
  )
}
