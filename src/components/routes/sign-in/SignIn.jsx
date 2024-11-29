import SignInForm from "./components/SignInForm"
import { Link } from "react-router-dom"
import { LoginIcon } from "@/assets/icons"
import { useTranslation } from "react-i18next"

export default function SignIn() {
  const { t } = useTranslation()

  const formTranslations = {
    email: t("auth.signIn.form.email"),
    password: t("auth.signIn.form.password"),
    rememberMe: t("auth.signIn.form.rememberMe"),
    button: t("auth.signIn.button"),
    successModal: {
      title: t("auth.signIn.successModal.title"),
      description: t("auth.signIn.successModal.description"),
    },
  }

  return (
    <section className="flex h-auto flex-col gap-12">
      <LoginIcon className="mx-auto" />
      <h1 className="mb-1 text-center text-heading-4">
        {t("auth.signIn.title")}
      </h1>
      <SignInForm translations={formTranslations} />
      <div className="flex flex-col items-center justify-between gap-12">
        <Link
          to={"/forgot-password"}
          className="cursor-pointer text-heading-6 font-semibold text-primary hover:underline"
        >
          {t("auth.signIn.forgotPassword")}
        </Link>
        <p className="text-body-medium font-regular">
          {t("auth.signIn.noAccount")}{" "}
          <span className="cursor-pointer font-semibold text-primary hover:underline">
            <Link to={"/sign-up"}>{t("auth.signIn.signUp")}</Link>
          </span>
        </p>
      </div>
    </section>
  )
}
