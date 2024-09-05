import { Input } from "@/components/ui/input"
import UserIcon from "@/assets/icons/auth-icons/user-icon.svg"
import EmailIcon from "@/assets/icons/auth-icons/email-icon.svg"
import PasswordIcon from "@/assets/icons/auth-icons/password-icon.svg"
import CalendarIcon from "@/assets/icons/auth-icons/calendar-icon.svg"
import { FormControl, FormLabel } from "@/components/ui/form"

const inputIconStyles =
  "absolute right-5 top-1/2 -translate-y-1/2 transform text-gray-400"

export default function SignUpInput({ placeholder, type, field }) {
  return (
    <div className="relative flex items-center rounded-2xl bg-dark-2">
      {placeholder === "Email" && <EmailIcon className={inputIconStyles} />}
      {placeholder === "Full Name" && <UserIcon className={inputIconStyles} />}
      {placeholder === "Password" && (
        <PasswordIcon className={inputIconStyles} />
      )}
      {placeholder === "Confirm Password" && (
        <PasswordIcon className={inputIconStyles} />
      )}
      {placeholder === "Date of Birth" && (
        <CalendarIcon className={inputIconStyles} />
      )}
      <FormLabel className="sr-only">{placeholder}</FormLabel>
      <FormControl>
        <Input
          type={type ? type : "text"}
          placeholder={placeholder}
          {...field}
          className="rounded-2xl border-0 p-6"
        />
      </FormControl>
    </div>
  )
}
