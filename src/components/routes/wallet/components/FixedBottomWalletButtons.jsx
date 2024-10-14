import PrimaryButton from "@/components/common/buttons/PrimaryButton"
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
        <div className="flex w-full gap-3">
          <Link to={link} className="w-full" onClick={handleClick}>
            <PrimaryButton
              className="w-full bg-dark-3 text-white"
              type={type || "button"}
              disabled={disabled}
              text={text}
              shadow={shadow}
            />
          </Link>
          <Link to={link} className="w-full" onClick={handleClick}>
            <PrimaryButton
              type={type || "button"}
              disabled={disabled}
              text={text}
              shadow={shadow}
            />
          </Link>
        </div>
      ) : (
        <div className="flex w-full gap-3">
          <PrimaryButton
            type={type || "button"}
            className="w-full bg-dark-3 text-white"
            disabled={disabled}
            onClick={handleClick}
            text={text}
            shadow={shadow}
          />
          <PrimaryButton
            type={type || "button"}
            disabled={disabled}
            onClick={handleClick}
            text={text}
            shadow={shadow}
          />
        </div>
      )}
    </div>
  )
}
