import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import DateInput from "@/components/input/DateInput"
import SelectInput from "@/components/input/SelectInput"
import CheckboxInput from "@/components/input/CheckboxInput"
import PasswordInput from "@/components/input/PasswordInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { UserIcon, EmailIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { useState } from "react"
import SuccessDialog from "@/components/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"

const passwordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  })

const userSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  nickName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Please select a gender",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
})

const formSchema = z.intersection(passwordSchema, userSchema)

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

export default function SignInForm() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
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
              <PasswordInput
                field={field}
                disabled={form}
                placeholder="Confirm password"
              />
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

          <pre>{JSON.stringify(form.formState.isValid, null, 2)}</pre>

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
