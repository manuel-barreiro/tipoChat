import BackButton from "@/components/common/buttons/BackButton"
import { useLocation } from "react-router-dom"
import { navbarConfig } from "./navbarConfig"
import { useTranslation } from "react-i18next"

const ROUTES_WITHOUT_NAVBAR = ["/search", "/room", "/home", "/"]
const EXCEPTION_ROUTES = ["/go-live", "/posts"]

function matchPath(pattern, path) {
  const patternParts = pattern.split("/")
  const pathParts = path.split("/")

  if (patternParts.length !== pathParts.length) return false

  return patternParts.every((part, i) => {
    return part.startsWith(":") || part === pathParts[i]
  })
}

function shouldHideNavbar(pathname) {
  // Special case for root path
  if (pathname === "/" && ROUTES_WITHOUT_NAVBAR.includes("/")) {
    return true
  }

  // Check other routes
  const hideNavbar = ROUTES_WITHOUT_NAVBAR.some((route) => {
    if (route === "/") return false // Skip root path in general check
    if (route === pathname) return true
    if (route.includes(":")) {
      const routeParts = route.split("/")
      const pathParts = pathname.split("/")
      return routeParts.every(
        (part, i) => part.startsWith(":") || part === pathParts[i]
      )
    }
    return pathname.startsWith(route)
  })

  const isException = EXCEPTION_ROUTES.some((exception) =>
    pathname.includes(exception)
  )

  return hideNavbar && !isException
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
  const { t } = useTranslation()

  const shouldHide = shouldHideNavbar(pathname)

  if (shouldHide) {
    return null
  }

  return currentConfig ? (
    <nav className="sticky left-0 right-0 top-0 z-50 flex h-12 w-full items-center justify-between bg-dark-1 py-8">
      <div className="flex items-center gap-2">
        <BackButton />
        {currentConfig.titleKey && (
          <h1 className="text-heading-4">{t(currentConfig.titleKey)}</h1>
        )}
      </div>
      {currentConfig.rightContent}
    </nav>
  ) : null
}
