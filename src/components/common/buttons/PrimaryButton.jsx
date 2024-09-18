import { cn } from "@/lib/utils"

export default function PrimaryButton({
  text = "Button",
  disabled = false,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full rounded-full p-4 duration-300 ease-in-out",
        disabled
          ? "cursor-not-allowed bg-primary-disabled"
          : "bg-primary shadow-button-1",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "text-body-large font-bold",
          disabled ? "text-grey-900" : "text-grey-900"
        )}
      >
        {text}
      </span>
    </button>
  )
}
