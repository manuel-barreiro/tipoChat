import React from "react"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator"
import { useTranslation } from "react-i18next"

const socials = [
  { name: "Copy Link", icon: "/images/social-icons/copylink.png" },
  {
    name: "X",
    icon: "/images/social-icons/x.png",
  },
  { name: "Facebook", icon: "/images/social-icons/facebook.png" },
  { name: "Instagram", icon: "/images/social-icons/instagram.png" },
  { name: "Yahoo", icon: "/images/social-icons/yahoo.png" },
  { name: "TikTok", icon: "/images/social-icons/tiktok.png" },
  { name: "Chat", icon: "/images/social-icons/chat.png" },
  { name: "WeChat", icon: "/images/social-icons/wechat.png" },
]

export default function ShareDrawer({ isOpen, setIsOpen }) {
  const { t } = useTranslation()
  return (
    <Drawer className="max-w-[430px]" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="flex flex-col items-center gap-2 px-8">
        <DrawerHeader>
          <DrawerTitle>{t("common.drawer.shareDrawer.title")}</DrawerTitle>
        </DrawerHeader>
        <Separator className="h-[1px] w-full bg-dark-3" />

        <div className="grid grid-cols-4 gap-8 py-5">
          {socials.map((social) => (
            <button
              key={social.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img src={social.icon} alt={social.name} className="" />
              <span className="text-body-xsmall font-medium">
                {social.name}
              </span>
            </button>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
