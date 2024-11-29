import { useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { buyPointsSchema } from "@/lib/zod-schemas"
import { Form, FormField } from "@/components/ui/form"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useNavigate } from "react-router-dom"
import SelectInput from "@/components/common/input/SelectInput"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function BuyPoints() {
  const { t } = useTranslation()
  const router = useNavigate()
  const inputRefs = useRef([])

  const form = useForm({
    resolver: zodResolver(buyPointsSchema),
    defaultValues: {
      amount: "",
      method: "",
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

  function onSubmit() {
    router("choose-crypto-network")
  }

  const buyPointsOptions = [
    { label: "10", value: 10 },
    { label: "20", value: 20 },
    { label: "50", value: 50 },
    { label: "100", value: 100 },
  ]

  const paymentMethodOptions = [{ label: "Crypto", value: "Crypto" }]
  return (
    <>
      <Form {...form} className>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full w-full flex-col justify-between gap-10"
        >
          <div className="flex h-auto w-full flex-col gap-4">
            <p className="mb-4 text-heading-6">{t("wallet.title")}</p>
            <p className="text-heading-6">
              {t("wallet.buyPoints.chooseAmount")}
            </p>
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  selectOptions={buyPointsOptions}
                  placeholder={t("wallet.buyPoints.amountPlaceholder")}
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
            <p className="text-heading-6">
              {t("wallet.buyPoints.chooseMethod")}
            </p>
            <FormField
              control={form.control}
              name="method"
              render={({ field }) => (
                <SelectInput
                  field={field}
                  selectOptions={paymentMethodOptions}
                  placeholder={t("wallet.buyPoints.methodPlaceholder")}
                  ref={(el) => (inputRefs.current[0] = el)}
                />
              )}
            />
          </div>

          <div className="sticky bottom-0 left-0 right-0 z-50 mt-[500px] flex w-full items-center justify-between border-t-2 border-dark-3 bg-dark-1 py-5 backdrop-blur-[20px]">
            <div className="flex w-full gap-3">
              <Link to={"/wallet"} className="w-full">
                <PrimaryButton
                  className="w-full bg-dark-3 text-white"
                  type={"button"}
                  text={t("wallet.fixedButtons.cancel")}
                />
              </Link>
              <PrimaryButton
                type={"submit"}
                disabled={
                  !form.formState.isValid || form.formState.isSubmitting
                }
                text={t("wallet.fixedButtons.continue")}
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
