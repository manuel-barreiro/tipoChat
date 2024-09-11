import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import DateInput from "@/components/input/DateInput"
import SelectInput from "@/components/input/SelectInput"
import CheckboxInput from "@/components/input/CheckboxInput"
import PasswordInput from "@/components/input/PasswordInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { UserIcon, EmailIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { useState, useEffect } from "react"
import SuccessDialog from "@/components/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"

const inputs = [
  {
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
    icon: UserIcon,
  },
  {
    name: "nickName",
    type: "text",
    placeholder: "Nickname",
    icon: UserIcon,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    icon: EmailIcon,
  },
]

const genderInputOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
]

export default function SignUpForm() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      nickName: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      acceptTerms: false,
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  })

  //Trigger validation on password and confirmPassword fields when either of them changes
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "password" || name === "confirmPassword") {
        form.trigger(["password", "confirmPassword"])
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-auto w-full flex-col gap-4"
        >
          {inputs.map((input) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <SignUpInput
                  field={field}
                  placeholder={input.placeholder}
                  type={input.type}
                  icon={input.icon}
                />
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <PasswordInput field={field} placeholder="Password" />
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <PasswordInput field={field} placeholder="Confirm password" />
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => <DateInput field={field} />}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <SelectInput field={field} selectOptions={genderInputOptions} />
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <CheckboxInput
                field={field}
                text={"Accept Terms And Conditions"}
              />
            )}
          />

          {/* For debbuging */}
          {/* <pre>{JSON.stringify(form.formState.isValid, null, 2)}</pre> */}

          <PrimaryButton
            type="submit"
            text="Sign Up"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          />
        </form>
      </Form>
      <SuccessDialog
        isOpen={success}
        title={staticData.dict.EN.signUpScreen.successModal.title}
        description={staticData.dict.EN.signUpScreen.successModal.description}
      />
    </>
  )
}
