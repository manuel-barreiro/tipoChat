import React from "react"
import RoomCard from "@/components/common/cards/RoomCard"

export default function UserRooms({ rooms }) {
  return (
    <section className="flex h-auto flex-col gap-4">
      {rooms.slice(0, 2).map((room) => (
        <RoomCard
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
