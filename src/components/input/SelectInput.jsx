import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormControl, FormItem, FormMessage } from "@/components/ui/form"
import { CaretDown } from "@/assets/icons"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function SelectInput({ field, selectOptions }) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(!!field.value)
  }, [field.value])

  return (
    <FormItem className="flex flex-col">
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger
            icon={CaretDown}
            isActive={isActive}
            className={cn(
              "rounded-2xl border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
              isActive ? "bg-input-focus" : "bg-dark-2 text-gray-500"
            )}
          >
            <SelectValue placeholder="Gender" className="text-white" />
          </SelectTrigger>
        </FormControl>
        <SelectContent className="rounded-2xl bg-dark-2 text-white">
          <SelectGroup>
            {selectOptions.map((option) => (
              <SelectItem
                className="cursor-pointer rounded-2xl px-6 focus:bg-primary"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <FormMessage className="text-body-small font-bold text-primary" />
    </FormItem>
  )
}
