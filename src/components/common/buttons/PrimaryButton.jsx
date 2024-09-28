import { cn } from "@/lib/utils"

export default function PrimaryButton({
  text = "Button",
  disabled = false,
  shadow = false,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full rounded-[16px] p-4 text-grey-900 duration-300 ease-in-out",
        disabled ? "cursor-not-allowed bg-primary-disabled" : "bg-primary",
        shadow && !disabled && "shadow-button-1",
        className
      )}
      {...props}
    >
      <span className="text-body-large font-bold">{text}</span>
    </button>
  )
}
