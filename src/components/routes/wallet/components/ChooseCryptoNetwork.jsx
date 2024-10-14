import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { chooseCryptoNetworkSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import CryptoDialog from "./CryptoDialog"
import SelectInput from "@/components/common/input/SelectInput"
import { Link } from "react-router-dom"
import OrderSuccess from "./OrderSuccess"

export default function ChooseCryptoNetwork() {
  // const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(chooseCryptoNetworkSchema),
    defaultValues: {
      network: "",
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
    setIsOpen(true)
  }

  const cryptoNetworkOptions = [
    { label: "Network 1", value: "Network 1" },
    { label: "Network 2", value: "Network 2" },
    { label: "Network 3", value: "Network 3" },
    { label: "Network 4", value: "Network 4" },
  ]
  return (
    <>
      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col justify-between gap-10"
        >
          <div className="flex h-auto w-full flex-col gap-4">
            <p className="mb-4 text-heading-6">You can buy points here</p>
            <p className="text-heading-6">Choose Network</p>
            <FormField
              control={form.control}
              name="network"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  selectOptions={cryptoNetworkOptions}
                  placeholder="Network"
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
          </div>

          <div className="sticky bottom-0 left-0 right-0 z-50 mt-[500px] flex w-full items-center justify-between border-t-2 border-dark-3 bg-dark-1 py-5 backdrop-blur-[20px]">
            <div className="flex w-full gap-3">
              <Link to={"/wallet/buy-points"} className="w-full">
                <PrimaryButton
                  className="w-full bg-dark-3 text-white"
                  type={"button"}
                  text={"Cancel"}
                />
              </Link>
              <PrimaryButton
                type={"submit"}
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                text={"Continue"}
              />
            </div>
          </div>
        </form>
      </Form>

      <CryptoDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSuccess={setSuccess}
      />
      <OrderSuccess
        success={success}
        title={"Successful Order!"}
        description={"You have bought 100 Points. Enjoy the benefits!"}
        setSuccess={setSuccess}
      />
    </>
  )
}
