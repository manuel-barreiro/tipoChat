import { OnboardingIcon } from "@/assets/icons"
import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

export default function Onboarding() {
  return (
    <section className="relative flex h-[100%] flex-col items-center justify-evenly gap-5">
      <OnboardingIcon className="ml-12" />
      <div className="flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-2">
          {staticData.dict.EN.onboardingScreen.title}
        </h1>
        <p className="text-body-large font-medium">
          {staticData.dict.EN.onboardingScreen.description}
        </p>
      </div>
      <Link to={"/sign-up"} className="w-full">
        <PrimaryButton text="Sign up with Email" />
      </Link>
      <p className="text-body-medium font-regular">
        {staticData.dict.EN.onboardingScreen.alreadyHaveAccount}{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"/sign-in"}>
            {staticData.dict.EN.onboardingScreen.signIn}
          </Link>
        </span>
      </p>
    </section>
  )
}
