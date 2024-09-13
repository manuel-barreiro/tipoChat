import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function CustomDropdownMenu({ trigger, items }) {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col rounded-[20px] border-0 bg-dark-2 px-2 py-4 text-white">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 p-3">
            <DropdownMenuCheckBoxItem text={item.text} />
            {index < items.length - 1 && <Separator className="bg-dark-3" />}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}

function DropdownMenuCheckBoxItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox className="border-white shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-dark-1" />
      <span className="text-body-medium font-semibold">{text}</span>
    </div>
  )
}
