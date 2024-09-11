import SignInForm from "./components/SignInForm"
import BackButton from "@/components/buttons/BackButton"
// import staticData from "@/static/staticData"
import { Link } from "react-router-dom"

export default function SignIn() {
  return (
    <section className="flex h-auto flex-col gap-4">
      <BackButton />
      <h1 className="mb-1 text-center text-heading-3">Sign In</h1>
      <SignInForm />
      <p className="mx-auto text-body-medium font-regular">
        Don&apos;t have an account?{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"/sign-up"}>Sign Up</Link>
        </span>
      </p>
    </section>
  )
}
