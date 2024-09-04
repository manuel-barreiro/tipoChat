import Onboarding from "@/assets/icons/onboarding.svg"
import PrimaryButton from "@/components/buttons/PrimaryButton"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

function OnboardingScreen() {
  return (
    <section className="relative flex h-full flex-col items-center justify-evenly">
      <Onboarding className="ml-12" />
      <div className="flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-1 text-white">
          {staticData.dict.EN.onboardingScreen.title}
        </h1>
        <p className="text-body-xlarge font-medium text-white">
          {staticData.dict.EN.onboardingScreen.description}
        </p>
      </div>
      <PrimaryButton text="Sign up with Email" link="/sign-up" />
      <p className="text-body-medium font-regular text-white">
        {staticData.dict.EN.onboardingScreen.alreadyHaveAccount}{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"sign-in"}>
            {staticData.dict.EN.onboardingScreen.signIn}
          </Link>
        </span>
      </p>
    </section>
  )
}

export default OnboardingScreen
