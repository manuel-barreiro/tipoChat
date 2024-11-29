import SignUpForm from "./components/SignUpForm"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function SignUp() {
  const { t } = useTranslation()

  const formTranslations = {
    inputs: {
      fullName: t("auth.signUp.form.fullName"),
      nickName: t("auth.signUp.form.nickName"),
      email: t("auth.signUp.form.email"),
      password: t("auth.signUp.form.password"),
      confirmPassword: t("auth.signUp.form.confirmPassword"),
      dateOfBirth: t("auth.signUp.form.dateOfBirth"),
      gender: t("auth.signUp.form.gender"),
      acceptTerms: t("auth.signUp.form.acceptTerms"),
    },
    genderOptions: [
      { label: t("auth.signUp.form.genderOptions.male"), value: "male" },
      { label: t("auth.signUp.form.genderOptions.female"), value: "female" },
      { label: t("auth.signUp.form.genderOptions.other"), value: "other" },
    ],
    button: t("auth.signUp.button"),
    successModal: {
      title: t("auth.signUp.successModal.title"),
      description: t("auth.signUp.successModal.description"),
    },
  }

  return (
    <section className="flex h-auto flex-col gap-4">
      <h1 className="mb-1 text-center text-heading-4">
        {t("auth.signUp.title")}
      </h1>
      <SignUpForm translations={formTranslations} />
      <p className="mx-auto text-body-medium font-regular">
        {t("auth.signUp.alreadyHaveAccount")}{" "}
        <span className="cursor-pointer font-semibold text-primary hover:underline">
          <Link to={"/sign-in"}>{t("auth.signUp.signIn")}</Link>
        </span>
      </p>
    </section>
  )
}
