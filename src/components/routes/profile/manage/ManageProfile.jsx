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
import { loggedUser } from "@/static/loggedUser"
import AdminMenuButton from "@/components/common/buttons/AdminMenuButton"
import { useTranslation } from "react-i18next"

export default function ManageProfile() {
  const { t } = useTranslation()
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(manageProfileSchema),
    defaultValues: {
      fullName: loggedUser.fullName,
      nickName: loggedUser.nickName,
      bio: loggedUser.bio,
      dateOfBirth: loggedUser.dateOfBirth,
      email: loggedUser.email,
      gender: loggedUser.gender,
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

  const genderInputOptions = [
    {
      label: t("profile.manage.form.genderOptions.male"),
      value: "male",
    },
    {
      label: t("profile.manage.form.genderOptions.female"),
      value: "female",
    },
    {
      label: t("profile.manage.form.genderOptions.other"),
      value: "other",
    },
  ]

  return (
    <section className="flex flex-col items-center gap-5">
      <div className="relative h-auto w-auto">
        <img src={loggedUser.profilePicUrl} alt="Profile Picture" />
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
                placeholder={t("profile.manage.form.fullName")}
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
                placeholder={t("profile.manage.form.nickName")}
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
                placeholder={t("profile.manage.form.bio")}
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
                placeholder={t("profile.manage.form.email")}
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
              text={t("profile.manage.form.buttons.manageLinks")}
              link="/profile/manage/links"
            />
            <AdminMenuButton
              text={t("profile.manage.form.buttons.resetPassword")}
              link="/profile/manage/reset-password"
            />
          </div>

          <PrimaryButton
            type="submit"
            text={t("profile.manage.form.buttons.update")}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={true}
          />
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={t("profile.manage.successDialog.title")}
        description={t("profile.manage.successDialog.description")}
      />
    </section>
  )
}
