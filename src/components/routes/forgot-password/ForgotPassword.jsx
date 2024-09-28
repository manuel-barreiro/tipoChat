import { ForgotPasswordIcon } from "@/assets/icons"
import { Form, FormField } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import TextInput from "@/components/common/input/TextInput"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/zod-schemas"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import { useState, useRef } from "react"
import { EmailIcon } from "@/assets/icons"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const forgotPasswordSchema = loginSchema.pick({ email: true })

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  })

  function onResetPassword(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/sign-in")
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
    <section className="flex w-full flex-col items-center gap-10">
      <ForgotPasswordIcon className="max-w-[90%]" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onResetPassword)}
          className="flex h-auto w-full flex-col gap-6"
        >
          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <>
                <Label className="font-medium">
                  Enter your account email to reset your password
                </Label>
                <TextInput
                  field={field}
                  placeholder={"Email"}
                  type={"email"}
                  icon={EmailIcon}
                  ref={(el) => (inputRefs.current[0] = el)}
                  onKeyDown={(e) => handleKeyDown(e, 0)}
                />
              </>
            )}
          />

          <PrimaryButton
            type="submit"
            text={"Send Recovery Link"}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={true}
          />
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={"Email Sent"}
        description={"Please check your inbox and click the link on it."}
      />
    </section>
  )
}
