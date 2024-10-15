import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import React from "react"

const mockPostData = {
  title: "Mazzinger Z",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ",
  price: "Price",
  type: "Type",
  link: "https://www.google.com",
}

export default function Post() {
  return (
    <section className="flex min-h-[80dvh] flex-col gap-5">
      <h1 className="text-heading-3 font-bold">{mockPostData.title}</h1>
      <p className="rounded-[16px] bg-dark-2 px-3 py-5 text-body-medium font-semibold">
        {mockPostData.about}
      </p>

      <FixedBottomButton text="Visit Post Link" link={mockPostData.link} />
    </section>
  )
}
