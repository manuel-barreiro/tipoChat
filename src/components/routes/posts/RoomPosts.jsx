import React from "react"
import { useParams } from "react-router-dom"
import { findPostsByRoomId, findRoomById } from "@/static/database"
import { useAuth } from "@/contexts/AuthContext"
import PostCard from "@/components/routes/posts/common/PostCard"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import BackButton from "@/components/common/buttons/BackButton"

export default function RoomPosts() {
  const { id } = useParams()
  const { currentUser } = useAuth()

  const room = findRoomById(id)
  const posts = findPostsByRoomId(id)

  const isOwner = currentUser.id === room.owner

  return (
    <>
      <nav className="sticky left-0 right-0 top-0 z-50 flex h-12 w-full items-center justify-between bg-dark-1 py-8">
        <div className="flex items-center gap-2">
          <BackButton />
          <h1 className="text-heading-4">Room Posts</h1>
        </div>
      </nav>
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
          <FixedBottomButton text="Create New Post" link={"create"} />
        )}
      </section>
    </>
  )
}
