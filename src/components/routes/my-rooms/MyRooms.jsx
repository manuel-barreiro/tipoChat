import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import RoomCard from "@/components/common/cards/RoomCard"
import { mockRooms } from "@/static/mockRooms"

export default function MyRooms() {
  return (
    <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
      {mockRooms.map((room) => (
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
      <FixedBottomButton text="Create New Room" link={"create"} />
    </section>
  )
}
