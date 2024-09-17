import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { manageProfileSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import DateInputDrawer from "@/components/common/input/DateInputDrawer"
import SelectInput from "@/components/common/input/SelectInput"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import TextAreaInput from "@/components/common/input/TextAreaInput"
import { UserIcon, EmailIcon, EditProfilePicIcon } from "@/assets/icons"
import { useState, useEffect } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import { mockUser } from "@/static/mockUser"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"

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

export default function ManageProfile() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(manageProfileSchema),
    defaultValues: {
      fullName: mockUser.fullName,
      nickName: mockUser.nickName,
      bio: mockUser.bio,
      dateOfBirth: mockUser.dateOfBirth,
      email: mockUser.email,
      gender: mockUser.gender,
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
    <section className="flex flex-col items-center gap-5">
      <div className="relative h-auto w-auto">
        <img src={mockUser.profilePicUrl} alt="Profile Picture" />
        <button className="absolute bottom-0 right-1 h-4 w-4">
          <EditProfilePicIcon className="text-primary" />
        </button>
      </div>

      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-auto w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name={"fullName"}
            render={({ field }) => (
              <TextInput
                field={field}
                placeholder={"Full Name"}
                type={"text"}
                icon={UserIcon}
                onBlur={() => form.trigger("fullName")}
              />
            )}
          />

          <FormField
            control={form.control}
            name={"nickName"}
            render={({ field }) => (
              <TextInput
                field={field}
                placeholder={"Nickname"}
                type={"text"}
                icon={UserIcon}
                onBlur={() => form.trigger("nickName")}
              />
            )}
          />

          <FormField
            control={form.control}
            name={"bio"}
            render={({ field }) => (
              <TextAreaInput
                field={field}
                placeholder={"Edit Bio..."}
                onBlur={() => form.trigger("bio")}
              />
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <DateInputDrawer
                field={field}
                onChange={() => form.trigger("dateOfBirth")}
              />
            )}
          />

          <FormField
            control={form.control}
            name={"email"}
            render={({ field }) => (
              <TextInput
                field={field}
                placeholder={"Email"}
                type={"text"}
                icon={EmailIcon}
                onBlur={() => form.trigger("email")}
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
                onChange={() => form.trigger("gender")}
              />
            )}
          />

          <div className="flex flex-col gap-10 p-3">
            <AdminMenuButton
              text="Manage your Links"
              link="/profile/manage/links"
            />
            <AdminMenuButton
              text="Reset your Password"
              link="/profile/manage/reset-password"
            />
          </div>

          <PrimaryButton
            type="submit"
            text="Update"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className={"rounded-[16px]"}
          />
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={"Profile Updated"}
        description={"Your profile has been updated successfully."}
      />
    </section>
  )
}
