import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import DateInput from "@/components/input/DateInput"
import SelectInput from "@/components/input/SelectInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { UserIcon, EmailIcon, PasswordIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    nickName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    dateOfBirth: z.date({
      required_error: "A date of birth is required.",
    }),
    gender: z.enum(["male", "female", "other"], { message: "Select gender" }),
    // acceptTerms: z
    //   .boolean()
    //   .refine(
    //     (val) => val === true,
    //     "You must accept the terms and conditions"
    //   ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

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
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    icon: PasswordIcon,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    icon: PasswordIcon,
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
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      nickName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      gender: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-5"
      >
        <h1 className="mb-1 text-center text-heading-3">Create New Account</h1>

        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={form.control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <SignUpInput
                  field={field}
                  placeholder={input.placeholder}
                  type={input.type}
                  icon={input.icon}
                />
                <FormMessage className="text-body-small text-red" />
              </FormItem>
            )}
          />
        ))}

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

        <PrimaryButton type="submit" text="Create New Account">
          Submit
        </PrimaryButton>

        <p className="mx-auto text-body-medium font-regular">
          {staticData.dict.EN.onboardingScreen.alreadyHaveAccount}{" "}
          <span className="cursor-pointer font-semibold text-primary hover:underline">
            <Link to={"/sign-in"}>
              {staticData.dict.EN.onboardingScreen.signIn}
            </Link>
          </span>
        </p>
      </form>
    </Form>
  )
}
