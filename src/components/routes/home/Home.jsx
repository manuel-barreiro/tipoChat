import React from "react"
import Header from "@/components/common/search-bar/SearchHeader"
import HamburgerMenu from "@/components/common/buttons/HamburgerMenu"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { mockData } from "@/static/database"
import RoomResultCard from "@/components/common/cards/RoomResultCard"
import UserResultCard from "@/components/common/cards/UserResultCard"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import { Skeleton } from "@/components/ui/skeleton"

const transformUserForCard = (user) => ({
  id: user.id,
  name: user.nickName,
  userPic: user.profilePicUrl,
  followers: user.data.followers,
  isVerified: user.isVerified,
})

const UserCardSkeleton = () => (
  <div className="flex items-center justify-between p-4">
    <div>
      <Skeleton className="h-16 w-16 rounded-full bg-dark-3" />
    </div>
    <div className="space-y-2">
      <Skeleton className="h-6 w-32 bg-dark-3" />
      <Skeleton className="h-4 w-24 bg-dark-3" />
    </div>
    <Skeleton className="h-10 w-28 rounded-full bg-dark-3" />
  </div>
)

const RoomCardSkeleton = () => (
  <div className="flex h-32 w-full items-stretch justify-between gap-5 py-4">
    <div className="relative h-full basis-1/2">
      <Skeleton className="h-full w-full rounded-lg bg-dark-3" />
      <div className="absolute bottom-0 left-0 flex items-center gap-2 pb-1 pl-2">
        <Skeleton className="h-3 w-3 rounded-full bg-dark-3" />
        <Skeleton className="h-4 w-12 bg-dark-3" />
      </div>
    </div>
    <div className="flex h-full basis-1/2 flex-col items-start justify-between">
      <div className="flex items-center gap-2">
        <Skeleton className="h-7 w-7 rounded-full bg-dark-3" />
        <Skeleton className="h-6 w-32 bg-dark-3" />
      </div>
      <Skeleton className="h-5 w-40 bg-dark-3" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-16 rounded-full bg-dark-3" />
        <Skeleton className="h-6 w-16 rounded-full bg-dark-3" />
      </div>
    </div>
  </div>
)

export default function Home() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState("subscriptions")
  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers(mockData.users.map(transformUserForCard))
      setRooms(mockData.rooms)
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-[430px]">
        <Header
          button={
            <Link to={"/profile"}>
              <HamburgerMenu />
            </Link>
          }
        />
      </div>

      <section className="mt-[60px] flex h-full w-full flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <button
            onClick={() => setSelected("subscriptions")}
            className={cn(
              "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
              selected === "subscriptions" && "border-primary text-primary"
            )}
          >
            {t("home.topSubscriptions")}
          </button>
          <button
            onClick={() => setSelected("following")}
            className={cn(
              "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
              selected === "following" && "border-primary text-primary"
            )}
          >
            {t("home.topFollowing")}
          </button>
        </div>

        <div className="space-y-4">
          {isLoading ? (
            <>
              {[...Array(3)].map((_, i) => (
                <UserCardSkeleton key={`user-skeleton-${i}`} />
              ))}
              {[...Array(3)].map((_, i) => (
                <RoomCardSkeleton key={`room-skeleton-${i}`} />
              ))}
            </>
          ) : (
            <>
              {users.map((user) => (
                <UserResultCard key={user.id} user={user} />
              ))}
              {rooms.map((room) => (
                <RoomResultCard key={room.id} room={room} />
              ))}
            </>
          )}
        </div>

        <FixedBottomButton
          text={t("home.createNewRoom")}
          link={"/my-rooms/create"}
        />
      </section>
    </>
  )
}
