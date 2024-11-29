import { ChangePasswordIcon } from "@/assets/icons"
import { Separator } from "@/components/ui/separator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { passwordSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useState, useEffect, useRef } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import PasswordInput from "@/components/common/input/PasswordInput"
import { useTranslation } from "react-i18next"

export default function ResetPassword() {
  const { t } = useTranslation()
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  })

  useEffect(() => {
    const subscription = form.watch(() => {
      const values = form.getValues()
      const allFieldsFilled = Object.keys(form.getValues()).every(
        (key) => values[key] !== ""
      )

      if (allFieldsFilled) {
        form.trigger()
      }
    })

    return () => subscription.unsubscribe()
  }, [form])

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/profile")
    }, 3000)
  }

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <ChangePasswordIcon className="max-w-[90%]" />
      <Separator className="bg-dark-3" />
      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-auto w-full flex-col gap-6"
        >
          <p className="font-semibold">
            {t("profile.manage.resetPassword.title")}
          </p>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <PasswordInput
                field={field}
                placeholder={t("profile.manage.resetPassword.newPassword")}
                ref={(el) => (inputRefs.current[0] = el)}
              />
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <PasswordInput
                field={field}
                placeholder={t("profile.manage.resetPassword.confirmPassword")}
                ref={(el) => (inputRefs.current[1] = el)}
              />
            )}
          />
          <PrimaryButton
            type="submit"
            text={t("profile.manage.resetPassword.continue")}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={true}
          />
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={t("profile.manage.resetPassword.title")}
        description={t("profile.manage.resetPassword.description")}
      />
    </section>
  )
}
