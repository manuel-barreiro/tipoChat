import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export default function PrimaryButton({ text, link }) {
  return (
    <Link to={link} className="w-[90%]">
      <button className="w-full rounded-full bg-primary p-4 shadow-sm shadow-primary duration-300 ease-in-out hover:scale-105">
        <span className="text-body-large font-bold">{text}</span>
      </button>
    </Link>
  )
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

PrimaryButton.defaultProps = {
  text: "Button",
  link: "/",
}
