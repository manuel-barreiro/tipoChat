import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { postSchema } from "@/lib/zod-schemas"
import { useState, useEffect } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate } from "react-router-dom"
import PostForm from "@/components/routes/posts/common/PostForm"
import { findPostById } from "@/static/database"
import { useParams } from "react-router-dom"

const images = [
  "/images/game1.png",
  "/images/game2.png",
  "/images/game3.png",
  "/images/game4.png",
  "/images/game5.png",
  "/images/game6.png",
]

export default function EditPost() {
  const router = useNavigate()
  const [success, setSuccess] = useState(false)
  const { id, postId } = useParams()
  const navigate = useNavigate()
  const post = { ...findPostById(postId), images }

  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      about: "",
      price: "",
      type: "",
      link: "",
      images: [],
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

  useEffect(() => {
    if (post) {
      form.reset({
        title: post.title,
        about: post.content,
        price: post.price || "",
        type: post.type,
        link: post.link || "",
        images: post.images || [],
      })
    }
  }, [post, form])

  function onSubmit(values) {
    console.log(values)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      navigate(`/room/${id}/posts`)
    }, 3000)
  }

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PostForm form={form} onSubmit={onSubmit} submitText="Save Changes" />
      <SuccessDialog
        isOpen={success}
        title="Post Updated"
        description="Your Post has been updated successfully."
      />
    </>
  )
}
