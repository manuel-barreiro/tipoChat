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
    <div className="absolute inset-0">
      {welcome === 0 && <Splash />}
      {welcome === 1 && <Welcome />}
    </div>
  )
}

export default Root
