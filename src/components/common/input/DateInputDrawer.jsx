import React, { useState, forwardRef, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FormControl, FormItem, FormMessage } from "@/components/ui/form"
import { CalendarIcon } from "@/assets/icons"
import "react-day-picker/dist/style.css"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

const DateInputDrawer = forwardRef(({ field, onKeyDown, onChange }, ref) => {
  const [isActive, setIsActive] = useState(false)
  const { t, i18n } = useTranslation()

  const formatDate = (date) => {
    return format(date, "PPP", {
      locale: i18n.language === "es" ? es : enUS,
    })
  }

  //useEffect to check if the field has a value and set isActive to true
  useEffect(() => {
    if (field.value) {
      setIsActive(true)
    }
  }, [])

  return (
    <FormItem className="flex flex-col">
      <Drawer className="max-w-[430px]">
        <DrawerTrigger asChild>
          <FormControl>
            <Button
              ref={ref}
              onKeyDown={onKeyDown}
              className={cn(
                "relative flex justify-start rounded-[16px] border-2 border-transparent p-6 hover:bg-input-focus focus:border-primary focus:bg-input-focus",
                isActive ? "bg-[#25253b]" : "bg-dark-2 text-gray-500"
              )}
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(!!field.value)}
            >
              {field.value ? (
                formatDate(field.value)
              ) : (
                <span>{t("common.input.dateInputDrawer.pickDate")}</span>
              )}
              <CalendarIcon
                className={cn(
                  "absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 transform",
                  isActive ? "text-primary" : "text-gray-500"
                )}
              />
            </Button>
          </FormControl>
        </DrawerTrigger>
        <DrawerContent className="flex flex-col items-center justify-evenly">
          <DrawerHeader>
            <DrawerTitle>
              {t("common.input.dateInputDrawer.selectDob")}
            </DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <Calendar
            className="rounded-[10px] border border-primary bg-dark-2 text-white"
            mode="single"
            captionLayout="dropdown-buttons"
            fromYear={1920}
            toYear={2012}
            selected={field.value}
            onSelect={(date) => {
              field.onChange(date)
              onChange()
              // Close the drawer immediately after selection
              document.querySelector('[data-state="open"]')?.click()
            }}
            defaultMonth={field.value}
            defaultYear={field.value}
            // onDayClick={() => setIsCalendarOpen(false)}
          />

          <DrawerFooter>
            <DrawerClose asChild>
              <PrimaryButton
                disabled={!field.value}
                text={
                  field.value
                    ? formatDate(field.value)
                    : t("common.input.dateInputDrawer.selectDob")
                }
              />
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <FormMessage className="text-body-small font-bold text-primary" />
    </FormItem>
  )
})

DateInputDrawer.displayName = "DateInputDrawer"

export default DateInputDrawer
