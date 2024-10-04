import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { EmbedIcon } from "@/assets/icons"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function EmbedRoomDialog({ isOpen, setIsOpen }) {
  const text =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/eGUEAvNpz48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

  return (
    <Dialog open={isOpen}>
      <DialogContent className="flex max-w-xs flex-col gap-6 rounded-[52px] bg-dark-1">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <EmbedIcon className="mb-4 h-14 w-14 text-light-blue" />
          <DialogTitle className="text-center text-heading-1 text-light-blue">
            Embed this Room
          </DialogTitle>
          <DialogDescription className="max-w-[80%] text-center text-body-large font-regular text-white">
            Copy the link below to embed this chat room in your site.
          </DialogDescription>
        </DialogHeader>
        <div className="h-auto w-auto overflow-hidden rounded-[16px] bg-dark-2 p-5">
          <p className="whitespace-pre-wrap break-all text-left text-body-small">
            {text}
          </p>
        </div>
        <DialogFooter className="flex w-full flex-col items-center gap-2">
          <PrimaryButton text="Copy" onClick={() => setIsOpen(false)} />
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
