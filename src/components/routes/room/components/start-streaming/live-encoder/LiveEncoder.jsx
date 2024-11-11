import React from "react"
import PasswordInput from "@/components/common/input/PasswordInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { liveEncoderSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useState, useEffect, useRef } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function LiveEncoder() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(liveEncoderSchema),
    defaultValues: {
      server: "",
      publicKey: "",
      privateKey: "",
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
      router("/room/123/go-live")
    }, 3000)
  }

  return (
    <section className="flex w-full flex-col items-center gap-6">
      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-auto w-full flex-col gap-6"
        >
          <p className="font-semibold">ADDITIONAL INFO</p>
          <FormField
            control={form.control}
            name="server"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="server" className="text-lg">
                  Server
                </Label>
                <PasswordInput
                  field={field}
                  id="server"
                  placeholder="Enter your server"
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="publicKey"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="publicKey" className="text-lg">
                  Public Key
                </Label>
                <PasswordInput
                  field={field}
                  id="publicKey"
                  placeholder="Enter your public key"
                  ref={(el) => (inputRefs.current[1] = el)}
                />
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="privateKey"
            render={({ field }) => (
              <div className="flex flex-col gap-2">
                <Label htmlFor="privateKey" className="text-lg">
                  Private Key
                </Label>
                <PasswordInput
                  field={field}
                  id="privateKey"
                  placeholder="Enter your private key"
                  ref={(el) => (inputRefs.current[1] = el)}
                />
              </div>
            )}
          />
          <div className="absolute bottom-0 left-0 right-0 flex w-full flex-col items-center gap-3 px-6 pb-10">
            <PrimaryButton
              type="submit"
              text="Update Streaming Keys"
              disabled={!form.formState.isValid || form.formState.isSubmitting}
              shadow={true}
            />
            <p>
              Need help?{" "}
              <Link to="/help" className="text-primary">
                Click here
              </Link>
            </p>
          </div>
        </form>
      </Form>

      <SuccessDialog
        isOpen={success}
        title={"Streaming Credentials Updated"}
        description={"Your credentials have been updated successfully."}
      />
    </section>
  )
}
