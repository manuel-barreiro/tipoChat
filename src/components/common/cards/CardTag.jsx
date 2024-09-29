import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function CardTag({ text, variant }) {
  return (
    <Badge
      className={cn(
        "cursor-default rounded-[6px] text-xs duration-300 ease-in-out",
        variant === "primary" &&
          "bg-secondary text-dark-3 hover:bg-dark-3 hover:text-secondary",
        variant === "secondary" &&
          "bg-dark-3 text-secondary hover:bg-secondary hover:text-dark-3"
      )}
    >
      {text}
    </Badge>
  )
}
