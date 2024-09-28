import SignInForm from "./components/SignInForm"
import staticData from "@/static/staticData"
import { Link } from "react-router-dom"
import { LoginIcon } from "@/assets/icons"

export default function SignIn() {
  return (
    <section className="flex h-auto flex-col gap-12">
      <LoginIcon className="mx-auto" />
      <h1 className="mb-1 text-center text-heading-4">
        {staticData.dict.EN.signInScreen.title}
      </h1>
      <SignInForm />
      <div className="flex flex-col items-center justify-between gap-12">
        <Link
          to={"/forgot-password"}
          className="cursor-pointer text-heading-6 font-semibold text-primary hover:underline"
        >
          {staticData.dict.EN.signInScreen.forgotPassword}
        </Link>
        <p className="text-body-medium font-regular">
          {staticData.dict.EN.signInScreen.noAccount}{" "}
          <span className="cursor-pointer font-semibold text-primary hover:underline">
            <Link to={"/sign-up"}>
              {staticData.dict.EN.signInScreen.signUp}
            </Link>
          </span>
        </p>
      </div>
    </section>
  )
}
