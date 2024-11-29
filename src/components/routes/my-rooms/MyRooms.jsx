import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import RoomCard from "@/components/common/cards/RoomCard"
import { useAuth } from "@/contexts/AuthContext"
import { useTranslation } from "react-i18next"
import { findRoomsByUserId } from "@/static/database"

export default function MyRooms() {
  const { t } = useTranslation()
  const { currentUser } = useAuth()

  const userRooms = findRoomsByUserId(currentUser.id)

  return (
    <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
      {userRooms.map((room) => (
        <RoomCard
          key={room.id}
          id={room.id}
          title={room.title}
          description={room.description}
          privacy={room.privacy}
          tags={room.tags}
          actions={room.actions}
          owner={room.owner}
          roomPic={room.roomPic}
        />
      ))}
      <FixedBottomButton
        text={t("my-rooms.createNewRoomButton")}
        link={"create"}
      />
    </section>
  )
}
