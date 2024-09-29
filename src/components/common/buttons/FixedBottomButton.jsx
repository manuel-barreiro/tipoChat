import PrimaryButton from "./PrimaryButton"
import { Link } from "react-router-dom"

export default function FixedBottomButton({
  text = "Fixed Button",
  onClick,
  link,
}) {
  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between border-t-2 border-dark-3 bg-dark-1 py-5 backdrop-blur-[20px]">
      <Link to={link} className="w-full">
        <PrimaryButton onClick={onClick} text={text} />
      </Link>
    </div>
  )
}
