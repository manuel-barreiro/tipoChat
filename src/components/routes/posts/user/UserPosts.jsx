import PostCard from "@/components/routes/posts/common/PostCard"
import { mockPosts } from "@/static/mockPosts"

export default function UserPosts() {
  return (
    <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
      {mockPosts.map((room) => (
        <PostCard
          key={room.id}
          id={room.id}
          title={room.title}
          description={room.description}
          privacy={room.privacy}
          tags={room.tags}
          actions={room.actions}
        />
      ))}
    </section>
  )
}
