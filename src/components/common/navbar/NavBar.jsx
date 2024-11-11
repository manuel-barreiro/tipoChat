import BackButton from "@/components/common/buttons/BackButton"
import { useLocation } from "react-router-dom"
import { navbarConfig } from "./navbarConfig"

const ROUTES_WITHOUT_NAVBAR = ["/", "/room/:id"]
function matchPath(pattern, path) {
  const patternParts = pattern.split("/")
  const pathParts = path.split("/")

  if (patternParts.length !== pathParts.length) return false

  return patternParts.every((part, i) => {
    return part.startsWith(":") || part === pathParts[i]
  })
}

function getNavConfig(pathname) {
  // First try exact match
  if (navbarConfig[pathname]) return navbarConfig[pathname]

  // Try matching patterns with parameters
  const matchingPattern = Object.keys(navbarConfig).find((pattern) =>
    matchPath(pattern, pathname)
  )

  return matchingPattern ? navbarConfig[matchingPattern] : {}
}
export default function NavBar() {
  const { pathname } = useLocation()
  const currentConfig = getNavConfig(pathname)

  const shouldHideNavbar = ROUTES_WITHOUT_NAVBAR.some((route) => {
    if (route === "/") return pathname === route
    if (route === "/room/:id") {
      // Show navbar if we're on the go-live page
      if (pathname.includes("/go-live")) return false
      // Hide navbar for main room view
      return (
        pathname.split("/").slice(0, 3).join("/") ===
        "/room/" + pathname.split("/")[2]
      )
    }
    return false
  })

  if (shouldHideNavbar) {
    return null
  }

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
