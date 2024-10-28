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
  titleColor,
  children,
}) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-6 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          {icon}
          <DialogTitle className={`text-center text-heading-1 ${titleColor}`}>
            {title}
          </DialogTitle>
          <DialogDescription className="max-w-[80%] text-center text-body-large text-white">
            {description}
          </DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter className="flex w-full flex-col items-center gap-2">
          <PrimaryButton
            text={children ? "Subscribe to User Name" : "Yes, please"}
            onClick={onConfirm}
          />
          <PrimaryButton
            className="bg-dark-3 text-white"
            text="Cancel"
            onClick={() => setIsOpen(false)}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
