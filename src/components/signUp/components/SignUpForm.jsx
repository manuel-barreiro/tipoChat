import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"

const formSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    nickname: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
    gender: z.enum(["male", "female", "other", "prefer not to say"]),
    acceptTerms: z
      .boolean()
      .refine(
        (val) => val === true,
        "You must accept the terms and conditions"
      ),
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
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
  {
    name: "dateOfBirth",
    type: "date",
    placeholder: "Date of Birth",
  },
]

export default function SignUpForm() {
  // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  const { handleSubmit, control } = form

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[90%] flex-col gap-6"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Create New Account
        </h1>

        {inputs.map((input) => (
          <FormField
            key={input.name}
            control={control}
            name={input.name}
            render={({ field }) => (
              <FormItem>
                <SignUpInput
                  field={field}
                  placeholder={input.placeholder}
                  type={input.type}
                />
                <FormMessage className="text-body-small text-red" />
              </FormItem>
            )}
          />
        ))}

        <PrimaryButton type="submit" text="Create New Account">
          Submit
        </PrimaryButton>
      </form>
    </Form>
  )
}
