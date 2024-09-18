import { RightArrow } from "@/assets/icons"
import { Link } from "react-router-dom"

export default function AdminMenuButton({ Icon, text, link }) {
  return (
    <Link
      to={link}
      className="flex w-full items-center justify-between text-heading-6 font-bold"
    >
      <span className="flex items-center gap-2">
        {Icon && <Icon className="h-6 w-6" />}
        {text}
      </span>
      <RightArrow className="h-6 w-6" />
    </Link>
  )
}
