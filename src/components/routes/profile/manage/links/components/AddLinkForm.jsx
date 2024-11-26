import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { addLinkSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import TextInput from "@/components/common/input/TextInput"
import { useTranslation } from "react-i18next"

export default function AddLinkForm() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])
  const { t } = useTranslation()

  const form = useForm({
    resolver: zodResolver(addLinkSchema),
    defaultValues: {
      title: "",
      textUrl: "",
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
    <>
      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col justify-between gap-10"
        >
          <div className="flex h-auto w-full flex-col gap-4">
            <p className="text-heading-6">
              {t("profile.manage.links.addForm.title")}
            </p>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <TextInput
                  field={field}
                  placeholder={t(
                    "profile.manage.links.addForm.titlePlaceholder"
                  )}
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
            <p className="text-heading-6">
              {t("profile.manage.links.addForm.url")}
            </p>
            <FormField
              control={form.control}
              name="textUrl"
              render={({ field }) => (
                <TextInput
                  field={field}
                  placeholder={t("profile.manage.links.addForm.urlPlaceholder")}
                  ref={(el) => (inputRefs.current[1] = el)}
                />
              )}
            />
          </div>

          <PrimaryButton
            type="submit"
            text={t("profile.manage.links.addForm.addButton")}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className={"rounded-[16px]"}
          />
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={t("profile.manage.links.successDialog.title")}
        description={t("profile.manage.links.successDialog.description")}
      />
    </>
  )
}
