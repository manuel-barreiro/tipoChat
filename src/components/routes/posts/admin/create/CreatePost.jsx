import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { postSchema } from "@/lib/zod-schemas"
import { useState, useEffect } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import PostForm from "@/components/routes/posts/common/PostForm"

export default function CreatePost() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)

  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      about: "",
      price: "",
      type: "",
      link: "",
    },
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
      router("/posts/admin")
    }, 3000)
  }

  return (
    <>
      <PostForm form={form} onSubmit={onSubmit} submitText="Create New Post" />
      <SuccessDialog
        isOpen={success}
        title="Post Created"
        description="Your post has been created successfully."
      />
    </>
  )
}
