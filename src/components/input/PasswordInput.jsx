import React, { useState, useEffect, forwardRef } from "react"
import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

const PasswordInput = forwardRef(({ placeholder, field, onKeyDown }, ref) => {
  const [isActive, setIsActive] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  useEffect(() => {
    setIsActive(!!field.value)
  }, [field.value])

  return (
    <FormItem>
      <div className="relative flex items-center rounded-2xl bg-dark-2">
        {showPassword ? (
          <Eye
            className={cn(
              "absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 transform",
              isActive ? "text-primary" : "text-gray-500"
            )}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <EyeOff
            className={cn(
              "absolute right-5 top-1/2 h-6 w-6 -translate-y-1/2 transform",
              isActive ? "text-primary" : "text-gray-500"
            )}
            onClick={togglePasswordVisibility}
          />
        )}
        <FormLabel className="sr-only">{placeholder}</FormLabel>
        <FormControl>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...field}
            ref={ref}
            onKeyDown={onKeyDown}
            className={cn(
              "password-input rounded-2xl border-2 border-transparent p-6 focus:border-primary",
              isActive ? "bg-input-focus" : "bg-dark-2",
              "text-white placeholder-gray-500",
              "autofill:bg-input-focus",
              "[&:-webkit-autofill]:bg-input-focus [&:-webkit-autofill]:[-webkit-box-shadow:0_0_0px_1000px_#6949FF14_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white]"
            )}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(!!field.value)}
          />
        </FormControl>
      </div>
      <FormMessage className="text-body-small font-bold text-primary" />
    </FormItem>
  )
})

PasswordInput.displayName = "PasswordInput"

export default PasswordInput
