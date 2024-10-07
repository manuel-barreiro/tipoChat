import { cn } from "@/lib/utils"

export default function PrimaryButton({
  text = false,
  disabled = false,
  shadow = false,
  icon = false,
  type,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "flex w-full items-center justify-center gap-4 rounded-[16px] p-4 text-grey-900 duration-300 ease-in-out",
        disabled ? "cursor-not-allowed bg-primary-disabled" : "bg-primary",
        shadow && !disabled && "shadow-button-1",
        className
      )}
      {...props}
    >
      {text && <span className="text-body-large font-bold">{text}</span>}
      {icon && icon}
    </button>
  )
}
