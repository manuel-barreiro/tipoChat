import React, { useState, forwardRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const SignUpInput = forwardRef(
  ({ placeholder, type, field, icon, onKeyDown, onBlur }, ref) => {
    const [isActive, setIsActive] = useState(false)
    const IconComponent = icon

    //useEffect to check if the field has a value and set isActive to true
    useEffect(() => {
      if (field.value) {
        setIsActive(true)
      }
    }, [])

    return (
      <FormItem>
        <div className="relative flex items-center rounded-2xl bg-dark-2">
          {IconComponent && (
            <IconComponent
              className={cn(
                "absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 transform",
                isActive ? "text-primary" : "text-gray-500"
              )}
            />
          )}
          <FormLabel className="sr-only">{placeholder}</FormLabel>
          <FormControl>
            <Input
              type={type || "text"}
              placeholder={placeholder}
              {...field}
              ref={ref}
              onKeyDown={onKeyDown}
              className={cn(
                "border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
                isActive
                  ? "bg-input-focus"
                  : "bg-dark-2 placeholder:text-gray-500"
              )}
              onFocus={() => setIsActive(true)}
              onBlur={(e) => {
                setIsActive(!!field.value)
                field.onBlur(e)
                onBlur && onBlur(e)
              }}
            />
          </FormControl>
        </div>
        <FormMessage className="text-body-small font-bold text-primary" />
      </FormItem>
    )
  }
)
SignUpInput.displayName = "SignUpInput"

export default SignUpInput
