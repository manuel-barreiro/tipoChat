import Splash from "@/components/routes/root/components/Splash"
import Welcome from "@/components/routes/root/components/Welcome"
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
    <main className="flex h-auto w-full items-center justify-center bg-dark-1">
      <div className="flex min-h-[100dvh] w-full max-w-[430px] flex-col justify-center bg-dark-1">
        {welcome === 0 && <Splash />}
        {welcome === 1 && <Welcome />}
      </div>
    </main>
  )
}

export default Root
