import React, { useState, useEffect, forwardRef } from "react"
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
import { cn } from "@/lib/utils"

const SelectInput = forwardRef(({ field, selectOptions, onKeyDown }, ref) => {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [touchStartY, setTouchStartY] = useState(null)

  useEffect(() => {
    setIsActive(!!field.value)
  }, [field.value])

  const handleTouchStart = (event) => {
    setTouchStartY(event.touches[0].clientY)
  }

  const handleTouchEnd = (event) => {
    if (touchStartY !== null) {
      const touchEndY = event.changedTouches[0].clientY
      const touchDiff = Math.abs(touchEndY - touchStartY)
      
      // If the touch was more or less stationary (not a scroll attempt)
      if (touchDiff < 10) {
        setIsOpen(!isOpen)
      }
    }
    setTouchStartY(null)
  }

  return (
    <FormItem className="flex flex-col">
      <Select 
        onValueChange={field.onChange} 
        defaultValue={field.value}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <FormControl>
          <SelectTrigger
            ref={ref}
            onKeyDown={onKeyDown}
            icon={CaretDown}
            isActive={isActive}
            className={cn(
              "rounded-2xl border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
              isActive ? "bg-input-focus" : "bg-dark-2 text-gray-500"
            )}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
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
})

SelectInput.displayName = "SelectInput"

export default SelectInput