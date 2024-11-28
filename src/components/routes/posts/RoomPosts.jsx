import React from "react"
import { useParams } from "react-router-dom"
import { findPostsByRoomId, findRoomById } from "@/static/database"
import { useAuth } from "@/contexts/AuthContext"
import PostCard from "@/components/routes/posts/common/PostCard"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"

export default function RoomPosts() {
  const { id } = useParams()
  const { currentUser } = useAuth()

  const room = findRoomById(id)
  const posts = findPostsByRoomId(id)

  const isOwner = currentUser.id === room.owner

  return (
    <>
      <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.content}
            privacy={room.privacy}
            tags={room.tags}
            owner={room.owner}
            actions={
              isOwner
                ? {
                    edit: true,
                    delete: true,
                  }
                : {}
            }
          />
        ))}
        {isOwner && (
          <div className="absolute bottom-0 left-0 right-0 px-6">
            <FixedBottomButton text="Create New Post" link={"create"} />
          </div>
        )}
      </section>
    </>
  )
}
