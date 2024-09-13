import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signUpSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import SignUpInput from "@/components/input/SignUpInput"
// import DateInput from "@/components/input/DateInput"
import DateInputDrawer from "@/components/input/DateInputDrawer"
import SelectInput from "@/components/input/SelectInput"
import CheckboxInput from "@/components/input/CheckboxInput"
import PasswordInput from "@/components/input/PasswordInput"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import { UserIcon, EmailIcon } from "@/assets/icons"
import staticData from "@/static/staticData"
import { useState, useEffect, useRef } from "react"
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
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
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
  const inputRefs = useRef([])

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

  //Este useEffect es para que cuando se cambie el password, se vuelva a validar el confirmPassword
  // useEffect(() => {
  //   const subscription = form.watch((value, { name }) => {
  //     if (name === "password" || name === "confirmPassword") {
  //       form.trigger(["password", "confirmPassword"])
  //     }
  //   })
  //   return () => subscription.unsubscribe()
  // }, [form])

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/profile")
    }, 3000)
  }

  // Esta función es para que cuando se presione enter, se vaya al siguiente input
  const handleKeyDown = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault()
      const nextIndex = index + 1
      if (nextIndex < inputs.length + 3) {
        // +3 for dateOfBirth, gender, and acceptTerms
        inputRefs.current[nextIndex].focus()
        form.trigger(inputs[index].name) // Trigger validation for the current field
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
          {inputs.map((input, index) => (
            <FormField
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) =>
                input.type === "password" ? (
                  <PasswordInput
                    field={field}
                    placeholder={input.placeholder}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onBlur={() => form.trigger(input.name)}
                  />
                ) : (
                  <SignUpInput
                    field={field}
                    placeholder={input.placeholder}
                    type={input.type}
                    icon={input.icon}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onBlur={() => form.trigger(input.name)}
                  />
                )
              }
            />
          ))}

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <DateInputDrawer
                field={field}
                ref={(el) => (inputRefs.current[inputs.length] = el)}
                onKeyDown={(e) => handleKeyDown(e, inputs.length)}
                onChange={() => form.trigger("dateOfBirth")}
              />
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <SelectInput
                field={field}
                selectOptions={genderInputOptions}
                ref={(el) => (inputRefs.current[inputs.length + 1] = el)}
                onKeyDown={(e) => handleKeyDown(e, inputs.length + 1)}
                onChange={() => form.trigger("gender")}
              />
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <CheckboxInput
                field={field}
                text={"Accept Terms And Conditions"}
                ref={(el) => (inputRefs.current[inputs.length + 1] = el)}
                onKeyDown={(e) => handleKeyDown(e, inputs.length + 1)}
                onChange={() => form.trigger("acceptTerms")}
              />
            )}
          />

          {/* Debugging 
          <pre className="flex flex-col gap-2">
            {JSON.stringify(form.formState.isValid, null, 2)}
            {JSON.stringify(form.formState.errors, null, 2)}
          </pre>*/}

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
