import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function CardTag({ text, variant }) {
  return (
    <Badge
      className={cn(
        "cursor-default rounded-[6px] text-xs",
        variant === "primary" &&
          "bg-secondary text-dark-3 hover:bg-secondary hover:text-dark-3",
        variant === "secondary" &&
          "bg-dark-3 text-secondary hover:bg-dark-3 hover:text-secondary"
      )}
    >
      {text}
    </Badge>
  )
}
