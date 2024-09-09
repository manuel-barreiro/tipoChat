import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LeftArrow } from "@/assets/icons"

export default function BackButton() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Button
      onClick={handleGoBack}
      variant="outline"
      size="icon"
      className="border-transparent bg-transparent hover:border-input-focus focus:border-input-focus"
    >
      <LeftArrow className="h-4 w-4" />
    </Button>
  )
}
