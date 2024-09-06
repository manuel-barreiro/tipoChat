import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
// import UserIcon from "@/assets/icons/auth-icons/user-icon.svg"
import { UserIcon, EmailIcon, PasswordIcon, CalendarIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    nickName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
    // gender: z.enum(["male", "female", "other", "prefer not to say"]),
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
  {
    name: "dateOfBirth",
    type: "date",
    placeholder: "Date of Birth",
    icon: CalendarIcon,
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
        <h1 className="mb-6 text-center text-heading-3">Create New Account</h1>

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
