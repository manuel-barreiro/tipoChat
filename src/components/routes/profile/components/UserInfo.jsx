import { VerifiedIcon, SquareTopArrowIcon } from "@/assets/icons"
import { cn } from "@/lib/utils"

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + " K"
  }
  return num
}

export default function UserInfo({
  name,
  profilePicUrl,
  isVerified,
  followers,
  following,
  nickName,
}) {
  return (
    <div className="flex w-full items-center justify-start gap-4">
      <img src={profilePicUrl} alt="Profile Photo" />
      <div className="flex flex-col gap-1 text-body-xsmall font-semibold sm:text-body-small md:text-body-medium">
        <h3 className="flex items-center gap-2 text-heading-6">
          <VerifiedIcon
            className={cn(
              "h-5 w-5",
              isVerified ? "text-primary" : "text-disabled"
            )}
          />
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <h4 className="text-body-small text-disabled">{nickName}</h4>
          {!isVerified && (
            <span className="flex cursor-pointer items-center gap-1 text-primary duration-300 ease-in-out hover:underline">
              Verify now
              <SquareTopArrowIcon className="h-3 w-3" />
            </span>
          )}
        </div>
        <h5 className="text-disabled">
          {formatNumber(following)} Following - {formatNumber(followers)}{" "}
          Followers
        </h5>
      </div>
    </div>
  )
}
