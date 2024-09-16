import React, { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const TextAreaInput = ({ placeholder, field, onBlur }) => {
  const [isActive, setIsActive] = useState(false)

  //useEffect to check if the field has a value and set isActive to true
  useEffect(() => {
    if (field.value) {
      setIsActive(true)
    }
  }, [])

  return (
    <FormItem>
      <div className="relative flex items-center rounded-2xl bg-dark-2">
        <FormLabel className="sr-only">{placeholder}</FormLabel>
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className={cn(
              "resize-none rounded-2xl border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
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

TextAreaInput.displayName = "TextAreaInput"

export default TextAreaInput
