import { VerifiedIcon } from "@/assets/icons"
import React from "react"
import { formatStat } from "@/lib/formatStat"
import { Button } from "@/components/ui/button"
import { HeartIcon } from "@/assets/icons"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function UserResultCard({ user }) {
  const { t } = useTranslation()

  return (
    <Link to={`/profile/${user.id}`}>
      <div className="flex items-center justify-between p-4">
        <div>
          <img
            src={user.userPic}
            alt={user.name}
            className="h-16 w-16 rounded-full"
          />
        </div>
        <div>
          <h3 className="flex items-center gap-1 text-body-large font-semibold">
            {user.name}
            {user.isVerified ? (
              <VerifiedIcon className="h-4 w-4 text-primary" />
            ) : null}
          </h3>
          <p className="text-body-medium">
            {formatStat(user.followers)} Followers
          </p>
        </div>
        <Button className="group gap-1 rounded-full border-[1px] bg-primary font-bold text-dark-1 transition-all duration-300 ease-in-out hover:border-primary hover:bg-transparent hover:text-primary">
          <span>{t("common.cards.userResultCard.follow")}</span>
          <HeartIcon className="h-4 w-4 text-dark-1 transition-all duration-300 ease-in-out group-hover:text-primary" />
        </Button>
      </div>
    </Link>
  )
}
