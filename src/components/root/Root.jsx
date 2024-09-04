import SplashScreen from "@/components/root/components/Splash"
import WelcomeScreen from "@/components/root/components/Welcome"
import OnboardingScreen from "@/components/root/components/Onboarding"
import { useState, useEffect } from "react"

function Root() {
  const [welcome, setWelcome] = useState(0)

  useEffect(() => {
    if (welcome < 2) {
      const timer = setTimeout(() => {
        setWelcome((prev) => prev + 1)
      }, 3000)

      // Limpiar el temporizador cuando el componente se desmonte
      return () => clearTimeout(timer)
    }
  }, [welcome])

  return (
    <body className="flex h-screen w-full items-center justify-center bg-dark-1">
      <main className="h-[100%] w-[430px] bg-dark-1">
        {/* Primero se renderiza la SplashScreen y luego de 5 segundos te lleva a la WelcomeScreen */}
        {welcome === 0 && <SplashScreen />}
        {welcome === 1 && <WelcomeScreen />}
        {welcome === 2 && <OnboardingScreen />}
      </main>
    </body>
  )
}

export default Root
