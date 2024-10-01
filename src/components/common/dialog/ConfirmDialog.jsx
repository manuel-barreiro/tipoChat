import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { WarningIcon } from "@/assets/icons"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function ConfirmDialog({
  isOpen,
  title,
  description,
  setIsOpen,
}) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-6 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <WarningIcon className="h-14 w-14 text-error" />
          <DialogTitle className="text-heading-1 text-error">
            {title}
          </DialogTitle>
          <DialogDescription className="max-w-[80%] text-center text-body-large text-white">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex w-full flex-col items-center gap-2">
          <PrimaryButton text="Yes, please" onClick={() => setIsOpen(false)} />
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
