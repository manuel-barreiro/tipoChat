import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { useTranslation } from "react-i18next"
import { es, enUS } from "date-fns/locale"

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const { i18n } = useTranslation()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      locale={i18n.language === "es" ? es : enUS}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        caption_dropdowns: "flex justify-center gap-2",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
          "touch-action: manipulation"
        ),
        day_selected:
          "bg-primary text-dark-2 hover:bg-input-focus hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "text-muted-foreground opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        vhidden: "vhidden hidden",
        ...classNames,
      }}
      components={{
        Dropdown: ({ value, onChange, children }) => {
          const options = React.Children.toArray(children)
          const selected = options.find((child) => child.props.value === value)
          const handleChange = (value) => {
            const changeEvent = {
              target: { value },
            }
            onChange?.(changeEvent)
          }
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                handleChange(value)
              }}
            >
              <SelectTrigger className="pr-1.5 focus:ring-0">
                <SelectValue className="!capitalize">
                  {selected?.props?.children}
                </SelectValue>
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="bg-dark-2 capitalize text-white opacity-100"
              >
                <ScrollArea className="h-80">
                  {options.map((option, id) => (
                    <SelectItem
                      className="focus:bg-primary"
                      key={`${option.props.value}-${id}`}
                      value={option.props.value?.toString() ?? ""}
                    >
                      {option.props.children}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          )
        },
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
