import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function UserLinks({ links }) {
  return (
    <Accordion type="single" collapsible>
      {links.map((link) => (
        <AccordionItem key={link.id} value={link.title}>
          <AccordionTrigger>{link.title}</AccordionTrigger>
          <AccordionContent>{link.url}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
