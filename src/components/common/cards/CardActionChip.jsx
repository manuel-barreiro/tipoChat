import { cn } from "@/lib/utils"
export default function CardActionChip({ action, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border-[3px] bg-transparent px-4 py-1 text-center text-xs font-semibold duration-300 ease-in-out md:text-sm",
        action === "Embed" &&
          "border-cyan text-cyan hover:bg-cyan hover:text-dark-2",
        action === "Share" &&
          "border-success text-success hover:bg-success hover:text-dark-2",
        action === "Edit" &&
          "border-orange text-orange hover:bg-orange hover:text-dark-2",
        action === "Delete" &&
          "border-error text-error hover:bg-error hover:text-dark-2"
      )}
    >
      {action}
    </button>
  )
}
