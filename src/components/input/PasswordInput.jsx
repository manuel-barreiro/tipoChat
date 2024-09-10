import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export default function PasswordInput({ placeholder, field }) {
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
              "absolute right-5 top-1/2 -translate-y-1/2 transform",
              isActive ? "text-primary" : "text-gray-500"
            )}
            onClick={togglePasswordVisibility}
          />
        ) : (
          <EyeOff
            className={cn(
              "absolute right-5 top-1/2 -translate-y-1/2 transform",
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
            className={cn(
              "rounded-2xl border-2 border-transparent p-6 focus:border-primary focus:bg-input-focus",
              isActive
                ? "bg-input-focus"
                : "bg-dark-2 placeholder:text-gray-500"
            )}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(!!field.value)}
          />
        </FormControl>
      </div>
      <FormMessage className="text-body-small text-red" />
    </FormItem>
  )
}