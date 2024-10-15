import React from "react"
import { TransactionIcon } from "@/assets/icons"

export default function TransactionHistory({ transactions }) {
  return (
    <div className="flex w-full flex-col items-start gap-5">
      <h4 className="text-heading-6">Last transactions</h4>

      <div className="flex flex-col gap-3">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-b-[.5px] border-dark-3 py-4"
          >
            <p className="flex w-full items-center gap-4">
              <TransactionIcon className="h-6 w-6" />
              <span className="text-heading-6">
                {transaction.action} Points
              </span>
            </p>
            <p className="ml-10 text-body-medium text-grey-300">
              {transaction.action === "Buy"
                ? "Bought"
                : transaction.action === "Sell"
                  ? "Sold"
                  : transaction.action === "Gift"
                    ? "Gifted"
                    : ""}{" "}
              {transaction.points} Points. Other details about transactions here
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
