import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
  {
    question: "What is TipoChat?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How can I follow a channel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How can I subscribe to a channel?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How can I delete my account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    question: "How do I exit the app?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="flex w-full flex-col gap-6">
      {faq.map((item, index) => (
        <AccordionItem
          className="rounded-[20px] border-0 bg-dark-2 p-6"
          key={index}
          value={`item-${index + 1}`}
        >
          <AccordionTrigger className="p-0 text-body-large font-bold">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="mt-2 border-t-[1px] border-dark-3 pt-2 text-body-medium text-disabled">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
