// components/UserActions.jsx
import { useTranslation } from "react-i18next"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { MemberIcon, HeartIcon, GiftIcon, BlockIcon } from "@/assets/icons"

export default function UserActions({ user }) {
  const { t } = useTranslation()

  return (
    <>
      <PrimaryButton
        className="bg-primary-100"
        text={t("profile.userActions.subscribe", {
          points: user.data.subscriptionPrice,
        })}
        shadow
        icon={<MemberIcon className="text-primary" />}
      />
      <div className="flex w-full flex-col items-start gap-3">
        <h6 className="text-heading-6 font-semibold">
          About {user.nickName} -{" "}
          <span className="text-body-small font-medium">
            {user.gender},{" "}
            {new Date().getFullYear() - user.dateOfBirth.getFullYear()} - ESP
          </span>
        </h6>
        <p className="text-justify text-body-medium font-semibold">
          {user.bio}
        </p>
      </div>
      <div className="flex w-full gap-2">
        <PrimaryButton
          text={t("profile.userActions.follow")}
          className="basis-2/5 gap-2 px-0"
          icon={<HeartIcon className="text-dark-2" />}
        />
        <PrimaryButton
          text={t("profile.userActions.sendGift")}
          className="basis-2/5 gap-2 border border-white bg-dark-2 p-0 text-white"
          icon={<GiftIcon className="text-dark-2" />}
        />
        <PrimaryButton
          text=""
          className="basis-1/5 border border-primary bg-dark-2 px-0"
          icon={<BlockIcon className="h-6 w-6 text-primary" />}
          aria-label={t("profile.userActions.block")}
        />
      </div>
    </>
  )
}
