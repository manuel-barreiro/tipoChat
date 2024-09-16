import { LoginIcon, ThreeDotsButton } from "@/assets/icons"
import CustomDropdownMenu from "@/components/common/menu/DropdownMenu"

const menuItems = [
  { text: "Help", type: "checkbox" },
  { text: "About TipoChat", type: "checkbox" },
  { text: "Copyright", type: "checkbox" },
  { text: "Contact", type: "checkbox" },
  { text: "Light Mode", type: "radio" },
  { text: "ESP/ENG", type: "radio" },
]
export default function TipoChatFooter() {
  return (
    <footer className="relative flex w-full items-center justify-between rounded-[20px] bg-dark-2 p-6">
      <div className="flex items-center gap-6">
        <LoginIcon className="h-8 w-8" />
        <p className="text-body-medium font-medium">
          2024 <span className="font-semibold">TipoChat</span>
        </p>
      </div>

      <CustomDropdownMenu
        trigger={<ThreeDotsButton className="h-5 w-5" />}
        items={menuItems}
      />
    </footer>
  )
}
