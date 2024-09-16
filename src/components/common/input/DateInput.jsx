import React, { useState, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FormControl, FormItem, FormMessage } from "@/components/ui/form"
import { CalendarIcon } from "@/assets/icons"
import "react-day-picker/dist/style.css"

const DateInput = forwardRef(({ field, onKeyDown }, ref) => {
  const [isActive, setIsActive] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  return (
    <FormItem className="flex flex-col">
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              ref={ref}
              onKeyDown={onKeyDown}
              className={cn(
                "relative flex justify-start rounded-2xl border-2 border-transparent p-6 hover:bg-input-focus focus:border-primary focus:bg-input-focus",
                isActive ? "bg-input-focus" : "bg-dark-2 text-gray-500"
              )}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(!!field.value)}
            >
              {field.value ? (
                format(field.value, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
              <CalendarIcon
                className={cn(
                  "absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 transform",
                  isActive ? "text-primary" : "text-gray-500"
                )}
              />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto rounded-2xl bg-dark-2 p-0 text-white"
          align="start"
        >
          <Calendar
            className="text-white"
            mode="single"
            captionLayout="dropdown-buttons"
            fromYear={1920}
            toYear={2012}
            selected={field.value}
            onSelect={field.onChange}
            defaultMonth={field.value}
            defaultYear={field.value}
            onDayClick={() => setIsCalendarOpen(false)}
          />
        </PopoverContent>
      </Popover>
      <FormMessage className="text-body-small font-bold text-primary" />
    </FormItem>
  )
})

DateInput.displayName = "DateInput"

export default DateInput
