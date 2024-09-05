import Splash from "@/components/root/components/Splash"
import Welcome from "@/components/root/components/Welcome"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Root() {
  const [welcome, setWelcome] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    if (welcome < 2) {
      const timer = setTimeout(() => {
        setWelcome((prev) => prev + 1)
      }, 3000)

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer)
    } else if (welcome === 2) {
      navigate("/onboarding")
    }
  }, [welcome, navigate])

  return (
    <>
      {/* Primero se renderiza la Splash y luego de 3 segundos te lleva a la Welcome */}
      {welcome === 0 && <Splash />}
      {welcome === 1 && <Welcome />}
    </>
  )
}

export default Root
