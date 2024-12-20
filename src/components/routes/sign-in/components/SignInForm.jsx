import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import CheckboxInput from "@/components/common/input/CheckboxInput"
import PasswordInput from "@/components/common/input/PasswordInput"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { EmailIcon } from "@/assets/icons"
import { useState, useRef } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"

export default function SignInForm({ translations }) {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onBlur",
  })

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/home")
    }, 3000)
  }

  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault()
      const nextIndex = index + 1
      if (nextIndex < 2) {
        // +2 for dateOfBirth and gender
        inputRefs.current[nextIndex].focus()
      }
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-auto w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <TextInput
                field={field}
                placeholder={translations.email}
                type={"email"}
                icon={EmailIcon}
                ref={(el) => (inputRefs.current[0] = el)}
                onKeyDown={(e) => handleKeyDown(e, 0)}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                field={field}
                placeholder={translations.password}
                ref={(el) => (inputRefs.current[1] = el)}
                onKeyDown={(e) => handleKeyDown(e, 1)}
              />
            )}
          />

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <CheckboxInput field={field} text={translations.rememberMe} />
            )}
          />

          <PrimaryButton
            type="submit"
            text={translations.button}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={true}
          />
        </form>
      </Form>
      <SuccessDialog
        isOpen={success}
        title={translations.successModal.title}
        description={translations.successModal.description}
      />
    </>
  )
}
