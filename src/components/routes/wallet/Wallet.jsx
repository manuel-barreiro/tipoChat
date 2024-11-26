import React from "react"
import PointsCard from "@/components/common/cards/PointsCard"
import { loggedUser } from "@/static/loggedUser"
import TransactionHistory from "./components/TransactionHistory"
import { Link } from "react-router-dom"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"

const mockTransactionHistory = [
  {
    action: "Buy",
    points: 100,
  },
  {
    action: "Sell",
    points: 50,
  },
  {
    action: "Gift",
    points: 100,
  },
  {
    action: "Buy",
    points: 100,
  },
]

export default function Wallet() {
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
              text={"Whithdraw"}
            />
          </Link>
          <Link to={"buy-points"} className="w-full">
            <PrimaryButton text={"Buy Points"} />
          </Link>
        </div>
      </div>
    </section>
  )
}
