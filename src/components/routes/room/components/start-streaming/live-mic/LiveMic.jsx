import { useEffect, useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { liveMicSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useNavigate } from "react-router-dom"
import SelectInput from "@/components/common/input/SelectInput"
import { Link } from "react-router-dom"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"

const cameraOptions = [
  { label: "Cam 1", value: 10 },
  { label: "Cam 2", value: 20 },
  { label: "Cam 3", value: 50 },
]

const microphoneOptions = [
  { label: "Mic 1", value: 10 },
  { label: "Mic 2", value: 20 },
  { label: "Mic 3", value: 50 },
]

export default function LiveMic() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(liveMicSchema),
    defaultValues: {
      camera: "",
      microphone: "",
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
      router("/room/123")
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
            <p className="mb-4 text-heading-6">You can buy points here</p>
            <p className="text-heading-6">Choose camera</p>
            <FormField
              control={form.control}
              name="camera"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  selectOptions={cameraOptions}
                  placeholder="Choose Camera"
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
            <p className="text-heading-6">Choose microphone</p>
            <FormField
              control={form.control}
              name="microphone"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  selectOptions={microphoneOptions}
                  placeholder="Choose Microphone"
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex w-full flex-col items-center gap-3 px-6 pb-10">
            <PrimaryButton
              type="submit"
              text="Go Live"
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
        title={"You are live!"}
        description={""}
      />
    </>
  )
}
