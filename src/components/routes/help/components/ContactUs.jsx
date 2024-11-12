import React from "react"
import {
  CustomerServiceIcon,
  InstagramIcon,
  FacebookIcon,
  WebsiteIcon,
  WhatsappIcon,
  TwitterIcon,
} from "@/assets/icons"

const contactLinks = [
  {
    icon: <CustomerServiceIcon className="text-primary" />,
    title: "Customer Service",
    link: "",
  },
  {
    icon: <WhatsappIcon className="text-primary" />,
    title: "WhatsApp",
    link: "",
  },
  {
    icon: <WebsiteIcon className="text-primary" />,
    title: "Website",
    link: "https://twitter.com/",
  },
  {
    icon: <FacebookIcon className="text-primary" />,
    title: "Facebook",
    link: "https://facebook.com",
  },
  {
    icon: <TwitterIcon className="text-primary" />,
    title: "X (Twitter)",
    link: "https://x.com",
  },
  {
    icon: <InstagramIcon className="text-primary" />,
    title: "Instagram",
    link: "https://instagram.com",
  },
]

export default function ContactUs() {
  return (
    <section className="flex flex-col gap-6">
      {contactLinks.map((link, index) => (
        <a href={link.link} key={index} className="h-auto w-full">
          <button className="flex w-full items-center justify-start rounded-[20px] bg-dark-2 p-5">
            <span className="mr-3">{link.icon}</span>
            <span className="font-bold">{link.title}</span>
          </button>
        </a>
      ))}
    </section>
  )
}
