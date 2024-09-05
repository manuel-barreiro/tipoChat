import { Link } from "react-router-dom"

export default function PrimaryButton({ text = "Button", link = "/" }) {
  return (
    <Link to={link} className="w-full">
      <button className="w-full rounded-full bg-primary p-4 shadow-sm shadow-primary duration-300 ease-in-out hover:scale-105">
        <span className="text-body-large font-bold text-grey-900">{text}</span>
      </button>
    </Link>
  )
}
