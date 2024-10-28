import React from "react"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import { SubPopUpIcon } from "@/assets/icons"
import { CheckIcon } from "lucide-react"

export default function BecomeSubPopUp({
  isOpen,
  setIsOpen,
  userName,
  onConfirm,
}) {
  return (
    <ActionDialog
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Become a Subscriber!"
      description={`Subscribe to ${userName}`}
      icon={<SubPopUpIcon className="mb-4 h-14 w-14 text-primary" />}
      onConfirm={onConfirm}
      titleColor="text-primary"
    >
      <div className="flex flex-col gap-4 px-4">
        <p className="text-center text-body-medium text-gray-500">
          Starting at 20 Coins per Month
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-primary" />
            <span className="text-body-medium text-white">
              5 Extra Gelleries
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-primary" />
            <span className="text-body-medium text-white">
              Available for any Room
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-primary" />
            <span className="text-body-medium text-white">
              High Resolution Images
            </span>
          </div>
        </div>
      </div>
    </ActionDialog>
  )
}
