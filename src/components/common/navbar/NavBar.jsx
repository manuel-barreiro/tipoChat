import BackButton from "@/components/common/buttons/BackButton"
import { useLocation } from "react-router-dom"
import { navbarConfig } from "./navbarConfig"

export default function NavBar() {
  const { pathname } = useLocation()
  const currentConfig = navbarConfig[pathname] || {}

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex w-full justify-center bg-dark-1">
      <nav className="flex h-16 w-full max-w-[430px] items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <BackButton />
          {currentConfig.title && (
            <h1 className="text-heading-4">{currentConfig.title}</h1>
          )}
        </div>
        {currentConfig.rightContent}
      </nav>
    </div>
  )
}
