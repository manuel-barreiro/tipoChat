// import { useState, useCallback } from "react"

export default function PrimaryButton({ text = "Button" }) {
  // const [isDisabled, setIsDisabled] = useState(false)

  // const handleClick = useCallback(() => {
  //   setIsDisabled(true)
  //   setTimeout(() => {
  //     setIsDisabled(false)
  //   }, 5000)
  // }, [])

  return (
    <button
      // onClick={handleClick}
      // disabled={isDisabled}
      className="w-full rounded-full bg-primary p-4 shadow-button-1 duration-300 ease-in-out"
    >
      <span className="text-body-large font-bold text-grey-900">{text}</span>
    </button>
  )
}
