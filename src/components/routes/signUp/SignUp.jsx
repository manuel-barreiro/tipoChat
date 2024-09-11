import SignUpForm from "./components/SignUpForm"
import BackButton from "@/components/buttons/BackButton"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <section className="flex h-auto flex-col gap-4">
      <BackButton />
      <h1 className="mb-1 text-center text-heading-3">
        {staticData.dict.EN.signUpScreen.title}
      </h1>
      <SignUpForm />
      <p className="mx-auto text-body-medium font-regular">
        {staticData.dict.EN.signUpScreen.alreadyHaveAccount}{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"/sign-in"}>{staticData.dict.EN.signUpScreen.signIn}</Link>
        </span>
      </p>
    </section>
  )
}
