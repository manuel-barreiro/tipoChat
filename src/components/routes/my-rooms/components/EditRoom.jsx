import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { roomSchema } from "@/lib/zod-schemas"
import { useState, useEffect } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import RoomForm from "./RoomForm"

const mockRoomData = {
  title: "Rock Music Lovers",
  about:
    "A room for rock music enthusiasts to discuss their favorite bands and songs.",
  category: "Music",
  subCategory: "Rock",
  language: "English",
  age: "18+",
  type: "Public",
  indexRoom: true,
  allowEmbed: false,
}

export default function EditRoom() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(roomSchema),
    defaultValues: mockRoomData,
    mode: "onBlur",
  })

  useEffect(() => {
    const subscription = form.watch(() => {
      const values = form.getValues()
      const allFieldsFilled = Object.keys(form.getValues()).every(
        (key) => values[key] !== ""
      )

      if (allFieldsFilled) {
        form.trigger()
      }
    })

    return () => subscription.unsubscribe()
  }, [form])

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      router("/my-rooms")
    }, 3000)
  }

  return (
    <>
      <RoomForm form={form} onSubmit={onSubmit} submitText="Update Room" />
      <SuccessDialog
        isOpen={success}
        title="Room Updated"
        description="Your room has been updated successfully."
      />
    </>
  )
}
