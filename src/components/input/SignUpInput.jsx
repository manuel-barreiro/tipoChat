import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { FormControl, FormLabel } from "@/components/ui/form"
import { cn } from "@/lib/utils"

export default function SignUpInput({ placeholder, type, field, icon }) {
  const [isActive, setIsActive] = useState(false)
  const IconComponent = icon

  useEffect(() => {
    setIsActive(!!field.value)
  }, [field.value])

  return (
    <div className="relative flex items-center rounded-2xl bg-dark-2">
      {IconComponent && (
        <IconComponent
          className={cn(
            "absolute right-5 top-1/2 -translate-y-1/2 transform",
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
          className={cn(
            "rounded-2xl border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
            isActive ? "bg-input-focus" : "bg-dark-2 text-gray-500"
          )}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(!!field.value)}
        />
      </FormControl>
    </div>
  )
}
