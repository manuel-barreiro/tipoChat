import React from "react"
import { useTranslation } from "react-i18next" // Add this
import PointsCard from "@/components/common/cards/PointsCard"
import { loggedUser } from "@/static/loggedUser"
import TransactionHistory from "./components/TransactionHistory"
import { Link } from "react-router-dom"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

const mockTransactionHistory = [
  {
    action: "Bought",
    points: 100,
  },
  {
    action: "Sold",
    points: 50,
  },
  {
    action: "Gifted",
    points: 100,
  },
  {
    action: "Bought",
    points: 100,
  },
]

export default function Wallet() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col gap-5">
      <PointsCard
        points={loggedUser.data.points}
        subscriptions={loggedUser.data.subscriptions}
        subscribers={loggedUser.data.subscribers}
        subscriptionPrice={loggedUser.data.subscriptionPrice}
      />
      <TransactionHistory transactions={mockTransactionHistory} />
      <div className="sticky bottom-0 left-0 right-0 z-50 flex w-full items-center justify-between border-t-2 border-dark-3 bg-dark-1 py-5 backdrop-blur-[20px]">
        <div className="flex w-full gap-3">
          <Link to={"withdraw"} className="w-full">
            <PrimaryButton
              className="w-full bg-dark-3 text-white"
              type={"button"}
              text={t("wallet.buttons.withdraw")}
            />
          </Link>
          <Link to={"buy-points"} className="w-full">
            <PrimaryButton text={t("wallet.buttons.buyPoints")} />
          </Link>
        </div>
      </div>
    </section>
  )
}
