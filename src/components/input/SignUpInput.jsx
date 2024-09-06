import { useState } from "react"
import { Input } from "@/components/ui/input"
import { FormControl, FormLabel } from "@/components/ui/form"

export default function SignUpInput({ placeholder, type, field, icon }) {
  const [isFocused, setIsFocused] = useState(false)
  const IconComponent = icon

  return (
    <div className="relative flex items-center rounded-2xl bg-dark-2">
      {IconComponent && (
        <IconComponent
          className={`absolute right-5 top-1/2 -translate-y-1/2 transform ${
            isFocused ? "text-primary" : "text-gray-400"
          }`}
        />
      )}
      <FormLabel className="sr-only">{placeholder}</FormLabel>
      <FormControl>
        <Input
          type={type || "text"}
          placeholder={placeholder}
          {...field}
          className="rounded-2xl border-0 p-6 focus:border-primary focus:bg-[#6949FF14]"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </FormControl>
    </div>
  )
}
