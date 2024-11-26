import {
  SettingsIcon,
  InfoReportIcon,
  LoginIcon,
  CopyrightIcon,
  ContactIcon,
} from "@/assets/icons"
import DropdownMenu from "@/components/common/dropdown/DropdownMenu"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "react-i18next"

const SwitchMenuItem = ({ label, id, checked, onCheckedChange }) => (
  <div
    className="flex items-center space-x-2"
    onClick={(e) => e.stopPropagation()}
  >
    <Label htmlFor={id}>{label}</Label>
    <Switch
      id={id}
      checked={checked}
      onCheckedChange={onCheckedChange}
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)

export default function TipoChatFooter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const { t } = useTranslation()
  const menuItems = [
    <Link to={"/help"} key={0} className="flex items-center gap-2">
      <SettingsIcon className="h-4 w-4" />
      <span>{t("profile.admin.tipoChatFooter.help")}</span>
    </Link>,
    <Link to={"/help/about"} key={1} className="flex items-center gap-2">
      <InfoReportIcon className="h-4 w-4 rotate-180" />
      <span>{t("profile.admin.tipoChatFooter.about")}</span>
    </Link>,
    <button onClick={() => {}} key={2} className="flex items-center gap-2">
      <CopyrightIcon className="h-4 w-4" />
      <span>{t("profile.admin.tipoChatFooter.copyright")}</span>
    </button>,
    <Link to={"/help"} key={3} className="flex items-center gap-2">
      <ContactIcon className="h-4 w-4" />
      <span>{t("profile.admin.tipoChatFooter.contact")}</span>
    </Link>,
    // <SwitchMenuItem
    //   key="light-mode"
    //   label={t("profile.admin.tipoChatFooter.lightMode")}
    //   id="light-mode"
    // />,
    <SwitchMenuItem
      key="esp-eng"
      label={t("profile.admin.tipoChatFooter.language")}
      id="esp-eng"
      checked={language === "es"}
      onCheckedChange={toggleLanguage}
    />,
  ]
  return (
    <footer className="relative flex w-full items-center justify-between rounded-[20px] bg-dark-2 p-6">
      <div className="flex items-center gap-6">
        <LoginIcon className="h-8 w-8" />
        <p className="text-body-medium font-medium">
          2024 <span className="font-semibold">TipoChat</span>
        </p>
      </div>

      <DropdownMenu
        menuItems={menuItems}
        onOpenChange={setIsDropdownOpen}
        open={isDropdownOpen}
      />
    </footer>
  )
}
