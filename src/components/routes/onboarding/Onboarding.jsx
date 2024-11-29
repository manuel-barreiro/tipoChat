import { OnboardingIcon } from "@/assets/icons"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export default function Onboarding() {
  const { t } = useTranslation()

  return (
    <section className="relative flex h-[100%] flex-col items-center justify-evenly gap-5">
      <OnboardingIcon className="ml-12" />
      <div className="flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-2">{t("onboarding.title")}</h1>
        <p className="text-body-large font-medium">
          {t("onboarding.description")}
        </p>
      </div>
      <Link to={"/sign-up"} className="w-full">
        <PrimaryButton text={t("onboarding.button")} shadow={true} />
      </Link>
      <p className="text-body-medium font-regular">
        {t("onboarding.alreadyHaveAccount")}{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"/sign-in"}>{t("onboarding.signIn")}</Link>
        </span>
      </p>
    </section>
  )
}
