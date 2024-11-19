import { VerifiedIcon } from "@/assets/icons"
import React from "react"
import { formatStat } from "@/lib/formatStat"
import { Button } from "@/components/ui/button"
import { HeartIcon } from "@/assets/icons"

export default function UserResultCard({ user }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={user.userPic} alt={user.name} className="w-18 rounded-full" />
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
        <span>Follow</span>
        <HeartIcon className="h-4 w-4 text-dark-1 transition-all duration-300 ease-in-out group-hover:text-primary" />{" "}
      </Button>
    </div>
  )
}
