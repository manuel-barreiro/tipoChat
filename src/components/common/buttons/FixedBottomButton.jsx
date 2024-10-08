import PrimaryButton from "./PrimaryButton"
import { Link } from "react-router-dom"

export default function FixedBottomButton({
  text = "Fixed Button",
  type,
  onClick,
  link,
  disabled,
  shadow,
  form, // New prop to handle form submission
}) {
  const handleClick = (e) => {
    if (form) {
      e.preventDefault() // Prevent default link behavior
      form.handleSubmit(onClick)(e) // Trigger form submission
    } else if (onClick) {
      onClick(e)
    }
  }

  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between border-t-2 border-dark-3 bg-dark-1 py-5 backdrop-blur-[20px]">
      {link ? (
        <Link to={link} className="w-full" onClick={handleClick}>
          <PrimaryButton
            type={type || "button"}
            disabled={disabled}
            text={text}
            shadow={shadow}
          />
        </Link>
      ) : (
        <PrimaryButton
          type={type || "button"}
          disabled={disabled}
          onClick={handleClick}
          text={text}
          shadow={shadow}
        />
      )}
    </div>
  )
}
