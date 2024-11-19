import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function LogOutDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer className="max-w-[430px]" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="flex flex-col items-center gap-2 px-8">
        <DrawerHeader>
          <DrawerTitle className="font-bold text-error">Log Out</DrawerTitle>
        </DrawerHeader>
        <Separator className="h-[1px] w-full bg-dark-3" />
        <div className="flex w-full flex-col gap-6 py-3 pb-6">
          <p className="text-center">Are you sure you want to Log Out?</p>

          <div className="flex w-full gap-3">
            <PrimaryButton
              type={"button"}
              className="w-full bg-dark-3 text-white"
              disabled={false}
              text={"Cancel"}
              shadow={false}
            />
            <PrimaryButton
              type={"button"}
              disabled={false}
              text={"Continue"}
              shadow={true}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
