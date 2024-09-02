import Spinner from "@/assets/icons/spinner.svg"

function SplashScreen() {
  return (
    <section className="relative flex h-full flex-col items-center justify-center">
      <h1 className="text-heading-1 text-white">TipoChat</h1>
      <Spinner className="absolute bottom-20 animate-spin" />
    </section>
  )
}

export default SplashScreen
