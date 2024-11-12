import { useState } from "react"
import { cn } from "@/lib/utils"
import ContactUs from "./components/ContactUs"
import FAQ from "./components/FAQ"

export default function HelpCenter() {
  const [selected, setSelected] = useState("faq")

  return (
    <section className="flex h-full w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => setSelected("faq")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "faq" && "border-primary text-primary"
          )}
        >
          FAQ
        </button>
        <button
          onClick={() => setSelected("contact")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "contact" && "border-primary text-primary"
          )}
        >
          Contact Us
        </button>
      </div>

      {selected === "faq" && <FAQ />}
      {selected === "contact" && <ContactUs />}
    </section>
  )
}
