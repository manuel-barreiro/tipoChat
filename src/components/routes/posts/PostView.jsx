import React from "react"
import { useParams, Navigate } from "react-router-dom"
import { findPostById, findRoomById } from "@/static/database"
import { useAuth } from "@/contexts/AuthContext"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"

export default function PostView() {
  const { id, postId } = useParams()
  const { currentUser } = useAuth()

  const post = findPostById(postId)
  const room = findRoomById(id)

  // Redirect if post doesn't exist or doesn't belong to this room
  if (!post || post.roomId !== id) {
    return <Navigate to={`/room/${id}/posts`} replace />
  }

  const isOwner = currentUser.id === room.owner

  return (
    <section className="flex min-h-[80dvh] flex-col gap-5">
      <h1 className="text-heading-3 font-bold">{post.title}</h1>
      <p className="rounded-[16px] bg-dark-2 px-3 py-5 text-body-medium font-semibold">
        {post.content}
      </p>

      {/* {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="rounded-[16px] object-cover"
        />
      )}

      <div className="mt-4 flex gap-4">
        <span>Likes: {post.likes}</span>
        <span>Comments: {post.comments}</span>
      </div> */}

      {isOwner && (
        <div className="absolute bottom-0 left-0 right-0 px-6">
          <FixedBottomButton
            link={`/room/${id}/posts/${postId}/edit`}
            text="Edit Post"
          />
        </div>
      )}
    </section>
  )
}
