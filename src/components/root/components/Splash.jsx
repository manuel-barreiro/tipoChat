import Spinner from "@/assets/icons/spinner.svg"
import staticData from "@/static/staticData"

export default function SplashScreen() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center">
      <h1 className="text-heading-1 text-white">
        {staticData.dict.EN.splashScreen.title}
      </h1>
      <Spinner className="absolute bottom-20 animate-spin" />
    </section>
  )
}
