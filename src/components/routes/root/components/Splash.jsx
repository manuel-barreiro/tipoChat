import { Loader } from "@/assets/icons"
import { useTranslation } from "react-i18next"

export default function SplashScreen() {
  const { t } = useTranslation()

  return (
    <section className="relative flex h-auto min-h-[100dvh] flex-col items-center justify-center">
      <h1 className="text-heading-1">{t("root.splash.title")}</h1>
      <Loader className="absolute bottom-20 animate-spin" />
    </section>
  )
}
