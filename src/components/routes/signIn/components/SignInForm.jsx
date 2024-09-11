import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import CheckboxInput from "@/components/input/CheckboxInput"
import PasswordInput from "@/components/input/PasswordInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { EmailIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { useState } from "react"
import SuccessDialog from "@/components/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"

export default function SignInForm() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  })

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/profile")
    }, 3000)
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
              <SignUpInput
                field={field}
                placeholder={"Email"}
                type={"email"}
                icon={EmailIcon}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <PasswordInput field={field} placeholder="Password" />
            )}
          />

          <FormField
            control={form.control}
            name="rememberMe"
            render={({ field }) => (
              <CheckboxInput field={field} text={"Remember me"} />
            )}
          />

          {/* Debugging */}
          {/* <pre>{JSON.stringify(form.formState.isValid, null, 2)}</pre> */}

          <PrimaryButton
            type="submit"
            text={staticData.dict.EN.signInScreen.button}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          />
        </form>
      </Form>
      <SuccessDialog
        isOpen={success}
        title={staticData.dict.EN.signInScreen.successModal.title}
        description={staticData.dict.EN.signInScreen.successModal.description}
      />
    </>
  )
}
