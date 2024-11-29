import { EditIcon, PointsCardBackground } from "@/assets/icons"
import { useTranslation } from "react-i18next"

export default function PointsCard({
  points,
  subscriptions,
  subscribers,
  subscriptionPrice,
}) {
  const { t } = useTranslation()
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-white py-8 text-dark-2">
      <PointsCardBackground className="absolute inset-0 h-full w-full text-primary" />
      <div className="relative z-10 flex flex-col items-start justify-evenly gap-4 px-8">
        <span className="text-heading-3 font-bold">
          {t("common.cards.pointsCard.yourPoints")}: {points}
        </span>

        <div className="flex w-full justify-between">
          <div className="flex flex-col items-start gap-2">
            <span className="text-body-medium font-medium">
              {t("common.cards.pointsCard.yourSubscriptions")}
            </span>
            <span className="text-body-small font-semibold">
              {subscriptions}
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-medium font-medium">
              {t("common.cards.pointsCard.yourSubscribers")}
            </span>
            <span className="text-body-small font-semibold">{subscribers}</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1">
          <span className="text-body-medium font-medium">
            {t("common.cards.pointsCard.yourSubscriptionPrice")}
          </span>
          <button className="flex items-center gap-2 text-body-medium font-semibold hover:underline">
            {subscriptionPrice} Points
            <EditIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
