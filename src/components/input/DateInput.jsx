import { useState, useEffect } from "react"
// import { Input } from "@/components/ui/input"
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

export default function DateInput({ field }) {
  const [isActive, setIsActive] = useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  useEffect(() => {
    setIsActive(!!field.value)
  }, [field.value])

  return (
    <FormItem className="flex flex-col">
      <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
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
                  "absolute right-5 top-1/2 -translate-y-1/2 transform",
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
            // disabled={(date) =>
            //   Number(date) < Date.now() - 1000 * 60 * 60 * 24 ||
            //   Number(date) > Date.now() + 1000 * 60 * 60 * 24 * 30
            // }
            onDayClick={() => setIsCalendarOpen(false)}
          />
        </PopoverContent>
      </Popover>
      <FormMessage className="text-body-small text-red" />
    </FormItem>
  )
}
