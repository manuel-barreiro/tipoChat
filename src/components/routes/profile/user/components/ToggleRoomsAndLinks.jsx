import { useState } from "react"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import UserRooms from "./UserRooms"
import UserLinks from "./UserLinks"

export default function ToggleRoomsAndLinks({ rooms, links }) {
  const [selected, setSelected] = useState("rooms")
  const { t } = useTranslation()

  return (
    <section className="flex h-full w-full flex-col gap-4">
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => setSelected("rooms")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "rooms" && "border-primary text-primary"
          )}
        >
          {t("profile.toggle.rooms")}
        </button>
        <button
          onClick={() => setSelected("links")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "links" && "border-primary text-primary"
          )}
        >
          {t("profile.toggle.links")}
        </button>
      </div>

      {selected === "rooms" && <UserRooms rooms={rooms} />}
      {selected === "links" && <UserLinks links={links} />}
    </section>
  )
}
