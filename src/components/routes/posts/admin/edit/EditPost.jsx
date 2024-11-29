import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { postSchema } from "@/lib/zod-schemas"
import { useState } from "react"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useNavigate, useParams } from "react-router-dom"
import PostForm from "@/components/routes/posts/common/PostForm"
import { findPostById } from "@/static/database"
import { useTranslation } from "react-i18next"

const images = [
  "/images/game1.png",
  "/images/game2.png",
  "/images/game3.png",
  "/images/game4.png",
  "/images/game5.png",
  "/images/game6.png",
]

export default function EditPost() {
  const { t } = useTranslation()
  const [success, setSuccess] = useState(false)
  const { id, postId } = useParams()
  const navigate = useNavigate()
  const post = { ...findPostById(postId), images }

  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: post.title || "",
      about: post.content || "",
      price: post.price || "",
      type: post.type || "",
      link: post.link || "",
      images: post.images || [],
    },
    mode: "onChange",
  })

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
      <PostForm
        form={form}
        onSubmit={onSubmit}
        submitText={t("posts.buttons.saveChanges")}
      />
      <SuccessDialog
        isOpen={success}
        title={t("posts.success.updated.title")}
        description={t("posts.success.updated.description")}
      />
    </>
  )
}
