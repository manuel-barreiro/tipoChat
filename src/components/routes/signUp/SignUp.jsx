import SignUpForm from "./components/SignUpForm"
import BackButton from "@/components/buttons/BackButton"

export default function SignUp() {
  return (
    <section className="flex h-auto flex-col gap-6">
      <BackButton />
      <SignUpForm />
    </section>
  )
}
