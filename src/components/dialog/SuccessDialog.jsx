import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SuccessDialogIcon } from "@/assets/icons"
import { Loader } from "@/assets/icons"

export default function SuccessDialog({ isOpen }) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-10 rounded-3xl bg-dark-2">
        <DialogHeader className="flex flex-col items-center justify-center gap-5">
          <SuccessDialogIcon className="h-36 w-36" />
          <DialogTitle className="text-primary">Login Successful!</DialogTitle>
          <DialogDescription className="max-w-[70%] text-center text-body-large text-white">
            Please wait a moment, we are logging you in.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex w-full flex-col items-center justify-center">
          <Loader className="h-12 w-12 animate-spin" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
