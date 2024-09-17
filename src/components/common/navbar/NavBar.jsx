import BackButton from "@/components/common/buttons/BackButton"
import { useLocation } from "react-router-dom"
import { navbarConfig } from "./navbarConfig"

export default function NavBar() {
  const { pathname } = useLocation()
  const currentConfig = navbarConfig[pathname] || {}

  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex h-12 w-full items-center justify-between bg-dark-1 py-8">
      <div className="flex items-center gap-2">
        <BackButton />
        {currentConfig.title && (
          <h1 className="text-heading-4">{currentConfig.title}</h1>
        )}
      </div>
      {currentConfig.rightContent}
    </nav>
  )
}
