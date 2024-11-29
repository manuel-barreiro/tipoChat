import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useTranslation } from "react-i18next"

export default function LogOutDrawer({ isOpen, setIsOpen }) {
  const { t } = useTranslation()

  return (
    <Drawer className="max-w-[430px]" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="flex flex-col items-center gap-2 px-8">
        <DrawerHeader>
          <DrawerTitle className="font-bold text-error">
            {t("profile.admin.logOutDrawer.logOut")}
          </DrawerTitle>
        </DrawerHeader>
        <Separator className="h-[1px] w-full bg-dark-3" />
        <div className="flex w-full flex-col gap-6 py-3 pb-6">
          <p className="text-center">
            {t("profile.admin.logOutDrawer.question")}
          </p>

          <div className="flex w-full gap-3">
            <PrimaryButton
              type={"button"}
              className="w-full bg-dark-3 text-white"
              disabled={false}
              text={t("profile.admin.logOutDrawer.cancel")}
              shadow={false}
            />
            <PrimaryButton
              type={"button"}
              disabled={false}
              text={t("profile.admin.logOutDrawer.continue")}
              shadow={true}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
