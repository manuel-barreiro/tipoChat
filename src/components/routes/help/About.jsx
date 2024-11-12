import React from "react"
import { LoginIcon } from "@/assets/icons"
import { ChevronRight } from "lucide-react"

export default function About() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex w-full flex-col items-center gap-4">
        <LoginIcon className="" />
        <h3 className="text-body-xlarge font-bold">TipoChat v7.4.5</h3>
      </div>

      <div className="flex w-full flex-col gap-6 border-t-[1px] border-dark-3 py-5">
        <button className="flex w-full justify-between">
          <span className="font-bold">Privacy Policy</span>
          <ChevronRight />
        </button>
        <button className="flex w-full justify-between">
          <span className="font-bold">Visit Our Website</span>
          <ChevronRight />
        </button>
        <button className="flex w-full justify-between">
          <span className="font-bold">Follow us on Social Media</span>
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}
