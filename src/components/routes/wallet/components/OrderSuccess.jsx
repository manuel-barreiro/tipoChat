import { useTranslation } from "react-i18next"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { SuccessDialogIcon } from "@/assets/icons"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useNavigate } from "react-router-dom"

export default function OrderSuccess({
  success,
  setSuccess,
  // title,
  // description,
  amount = 100,
}) {
  const { t } = useTranslation()
  const router = useNavigate()

  return (
    <Dialog open={success}>
      <DialogContent className="flex max-w-xs flex-col gap-10 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-5">
          <SuccessDialogIcon className="h-36 w-36" />
          <DialogTitle className="text-primary">
            {t("wallet.successDialog.title")}
          </DialogTitle>
          <DialogDescription className="max-w-[80%] text-center text-body-large text-white">
            {t("wallet.successDialog.description", { amount })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex w-full flex-col items-center justify-center">
          <PrimaryButton
            text="Ok"
            onClick={() => {
              setSuccess(false)
              router("/wallet")
            }}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
