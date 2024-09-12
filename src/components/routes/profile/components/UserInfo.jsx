import { VerifiedIcon, MemberIcon, SquareTopArrowIcon } from "@/assets/icons"
import { cn } from "@/lib/utils"

export default function UserInfo({
  name,
  profilePicUrl,
  isVerified,
  isMember,
  followers,
  following,
  subscribers,
  subscriptions,
}) {
  return (
    <section className="flex flex-col gap-10">
      <div className="jus flex items-center gap-4">
        <img src={profilePicUrl} alt="Profile Photo" />
        <div className="flex flex-col gap-1 text-body-xsmall font-semibold sm:text-body-small md:text-body-medium">
          <h3 className="text-heading-6">{name}</h3>
          <AccountStatus type={"verified"} status={isVerified} />
          <AccountStatus type={"member"} status={isMember} />
        </div>
      </div>

      <div className="flex w-full justify-evenly">
        <AccountMetric metric={"Followers"} number={followers} />
        <AccountMetric metric={"Following"} number={following} />
        <AccountMetric metric={"Subscribers"} number={subscribers} />
        <AccountMetric metric={"Subscriptions"} number={subscriptions} />
      </div>
    </section>
  )
}

function AccountStatus({ type, status }) {
  const Icon = type === "verified" ? VerifiedIcon : MemberIcon
  let text = ""
  let action = type === "verified" ? "Verify now" : "Become a member"
  if (type === "verified") {
    text = status ? "Account Verified" : "Account Not Verified"
  } else if (type === "member") {
    text = status ? "Active Member" : "Not a Member"
  }
  return (
    <div className="flex items-center gap-2">
      <Icon
        className={cn("h-6 w-6", status ? "text-primary" : "text-disabled")}
      />
      {status ? (
        <span className="text-primary">{text}</span>
      ) : (
        <p className="flex items-center gap-2">
          <span className="text-disabled">{text}</span>
          <span className="flex cursor-pointer items-center gap-1 text-body-xsmall font-semibold text-primary duration-300 ease-in-out hover:underline">
            {action}
            <SquareTopArrowIcon className="h-3 w-3" />
          </span>
        </p>
      )}
    </div>
  )
}

function AccountMetric({ metric, number }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <p className="text-body-large font-semibold">{number}</p>
      <p className="text-body-xsmall font-semibold">{metric}</p>
    </button>
  )
}
