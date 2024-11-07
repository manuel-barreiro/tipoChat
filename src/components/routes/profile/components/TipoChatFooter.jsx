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

const SwitchMenuItem = ({ label, id }) => (
  <div
    className="flex items-center space-x-2"
    onClick={(e) => e.stopPropagation()}
  >
    <Label htmlFor={id}>{label}</Label>
    <Switch id={id} onClick={(e) => e.stopPropagation()} />
  </div>
)

const menuItems = [
  <button onClick={() => {}} key={0} className="flex items-center gap-2">
    <SettingsIcon className="h-4 w-4" />
    <span>Help</span>
  </button>,
  <button onClick={() => {}} key={1} className="flex items-center gap-2">
    <InfoReportIcon className="h-4 w-4 rotate-180" />
    <span>About TipoChat</span>
  </button>,
  <button onClick={() => {}} key={2} className="flex items-center gap-2">
    <CopyrightIcon className="h-4 w-4" />
    <span>Copyright</span>
  </button>,
  <button onClick={() => {}} key={3} className="flex items-center gap-2">
    <ContactIcon className="h-4 w-4" />
    <span>Contact</span>
  </button>,
  <SwitchMenuItem key="light-mode" label="Light mode" id="light-mode" />,
  <SwitchMenuItem key="esp-eng" label="ESP / ENG" id="esp-eng" />,
]

export default function TipoChatFooter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
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
