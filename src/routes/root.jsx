import SplashScreen from "@/components/SplashScreen"
import WelcomeScreen from "@/components/WelcomeScreen"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

function Root() {
  const [welcome, setWelcome] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(1)
    }, 3000)

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer)
  }, [])

  return (
    <body className="bg-dark-1 flex h-screen w-full items-center justify-center">
      <main className="bg-dark-1 h-[100%] w-[430px]">
        {/* Primero se renderiza la SplashScreen y luego de 5 segundos te lleva a la WelcomeScreen */}
        {welcome === 0 && <SplashScreen />}
        {welcome === 1 && <WelcomeScreen />}
        <Outlet />
      </main>
    </body>
  )
}

export default Root
