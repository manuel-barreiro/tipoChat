import React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
} from "@/components/ui/drawer"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

export default function ShareDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer className="max-w-[430px]" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="flex flex-col items-center justify-evenly">
        <DrawerHeader>
          <DrawerTitle>Share</DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose asChild>
            <PrimaryButton text="Share"></PrimaryButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
