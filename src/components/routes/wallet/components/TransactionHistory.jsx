import React from "react"
import { useTranslation } from "react-i18next"
import { TransactionIcon } from "@/assets/icons"

export default function TransactionHistory({ transactions }) {
  const { t } = useTranslation()

  return (
    <div className="flex w-full flex-col items-start gap-5">
      <h4 className="text-heading-6">{t("wallet.lastTransactions")}</h4>

      <div className="flex flex-col gap-3">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 border-b-[.5px] border-dark-3 py-4"
          >
            <p className="flex w-full items-center gap-4">
              <TransactionIcon className="h-6 w-6" />
              <span className="text-heading-6">
                {t(
                  `wallet.transactionDetails.${transaction.action.toLowerCase()}`
                )}{" "}
                {t("wallet.transactionDetails.points")}
              </span>
            </p>
            <p className="ml-10 text-body-medium text-grey-300">
              {t(
                `wallet.transactionDetails.${transaction.action.toLowerCase()}`
              )}{" "}
              {transaction.points} {t("wallet.transactionDetails.points")}.{" "}
              {t("wallet.transactionDetails.otherDetails")}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
