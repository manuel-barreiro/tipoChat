import { React } from "react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function CryptoDialog({ isOpen, setIsOpen, setSuccess }) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-6 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <img src="/images/qr_demo.png" alt="qr demo" className="w-32" />
          <DialogTitle className="max-w-56 text-center text-white">
            You are buying 100 Points With Crypto
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <p className="flex flex-col items-start">
            <span className="font-semibold">Quantity:</span>
            <span className="font-extralight text-grey-300">10.00</span>
          </p>
          <p className="flex flex-col items-start">
            <span className="font-semibold">Crypto:</span>
            <span className="font-extralight text-grey-300">
              UDST.BEP20 - Tether USD
            </span>
          </p>
          <p className="flex flex-col items-start">
            <span className="font-semibold">Address:</span>
            <span className="text-clip font-extralight text-grey-300">
              0xb794f5ea0ba39494ce839613fffba74
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-semibold">Status:</span>
            <span className="font-semibold text-secondary">PENDING</span>
          </p>
          <p className="font-extralight text-grey-300">
            Please wait for payment confirmation.
          </p>
        </div>
        <DialogFooter className="flex w-full flex-col items-center gap-2">
          <PrimaryButton
            text="Buy Now"
            onClick={() => {
              setIsOpen(false)
              setSuccess(true)
            }}
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
