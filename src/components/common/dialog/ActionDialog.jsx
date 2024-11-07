import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function ActionDialog({
  isOpen,
  setIsOpen,
  title,
  description,
  icon,
  onConfirm,
  titleColor = "text-white",
  variant = "default",
  confirmText = "Yes, please",
  showCancel = true,
  cancelText = "Cancel",
  children,
  embedText,
}) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "text-success"
      case "error":
        return "text-error"
      case "warning":
        return "text-secondary"
      case "embed":
        return "text-light-blue"
      default:
        return titleColor
    }
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-6 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          {icon && (
            <span className={`mb-4 h-14 w-14 ${getVariantStyles()}`}>
              {icon}
            </span>
          )}

          <DialogTitle
            className={`text-center text-heading-1 ${getVariantStyles()}`}
          >
            {title}
          </DialogTitle>

          <DialogDescription className="max-w-[80%] text-center text-body-large text-white">
            {description}
          </DialogDescription>
        </DialogHeader>

        {embedText && (
          <div className="h-auto w-auto overflow-hidden rounded-[16px] bg-dark-2 p-5">
            <p className="whitespace-pre-wrap break-all text-left text-body-small">
              {embedText}
            </p>
          </div>
        )}

        {children}

        <DialogFooter className="flex w-full flex-col items-center gap-2">
          <PrimaryButton
            text={confirmText}
            onClick={onConfirm || (() => setIsOpen(false))}
          />
          {showCancel && (
            <PrimaryButton
              className="bg-dark-3 text-white"
              text={cancelText}
              onClick={() => setIsOpen(false)}
            />
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
