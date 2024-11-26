import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"

export default function CardActionChip({ action, onClick }) {
  const { t } = useTranslation()

  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border-[3px] bg-transparent px-4 py-1 text-center text-xs font-semibold duration-300 ease-in-out",
        action === "embed" &&
          "border-cyan text-cyan hover:bg-cyan hover:text-dark-2",
        action === "share" &&
          "border-success text-success hover:bg-success hover:text-dark-2",
        action === "edit" &&
          "border-orange text-orange hover:bg-orange hover:text-dark-2",
        action === "delete" &&
          "border-error text-error hover:bg-error hover:text-dark-2"
      )}
    >
      {t(`common.cards.roomCard.cardActionChip.${action.toLowerCase()}`)}
    </button>
  )
}
