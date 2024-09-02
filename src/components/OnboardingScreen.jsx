import Onboarding from "@/assets/icons/onboarding.svg"
import TipoChatButton from "./buttons/TipoChatButton"

function OnboardingScreen() {
  return (
    <section className="relative flex h-full flex-col items-center justify-evenly">
      <Onboarding className="ml-12" />
      <div className="flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-1 text-white">Welcome to your new Chat</h1>
        <p className="text-body-xlarge font-medium text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <TipoChatButton text="Sign up with Email" />
    </section>
  )
}

export default OnboardingScreen
