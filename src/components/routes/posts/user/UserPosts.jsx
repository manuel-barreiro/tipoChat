import PostCard from "@/components/routes/posts/common/PostCard"
import { mockPosts } from "@/static/mockPosts"

export default function UserPosts() {
  const viewer = "user@user.com"
  return (
    <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
      {mockPosts.map((room) => (
        <PostCard
          viewer={viewer}
          owner={room.user}
          key={room.id}
          id={room.id}
          title={room.title}
          description={room.description}
          privacy={room.privacy}
          tags={room.tags}
          price={room.price}
        />
      ))}
    </section>
  )
}
