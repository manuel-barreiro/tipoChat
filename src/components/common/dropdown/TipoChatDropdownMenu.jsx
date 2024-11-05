import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react"

export default function TipoChatDropdownMenu({ menuItems }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <EllipsisVertical size={24} className="text-grey-600" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex w-auto flex-col rounded-[20px] border-0 bg-dark-2 py-4 text-white">
        <DropdownMenuGroup className="px-2">
          {menuItems.map((item, index) => (
            <div key={index}>
              <DropdownMenuItem className="cursor-pointer hover:!bg-transparent hover:!text-primary">
                {item}
              </DropdownMenuItem>
              {index < menuItems.length - 1 && (
                <DropdownMenuSeparator className="bg-dark-3" />
              )}
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
