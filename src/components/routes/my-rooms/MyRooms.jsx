import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import RoomCard from "@/components/common/cards/RoomCard"
import { useAuth } from "@/contexts/AuthContext"
import { useTranslation } from "react-i18next"

export default function MyRooms() {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  return (
    <section className="flex h-auto min-h-[75dvh] flex-col gap-4">
      {currentUser.rooms.map((room) => (
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
      <FixedBottomButton text={t("my-rooms.createNewRoom")} link={"create"} />
    </section>
  )
}
