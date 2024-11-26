import React from "react"
import Header from "@/components/common/search-bar/SearchHeader"
import HamburgerMenu from "@/components/common/buttons/HamburgerMenu"
import { Link } from "react-router-dom"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import { mockResults } from "@/static/mockSearchResults"
import RoomResultCard from "@/components/common/cards/RoomResultCard"
import UserResultCard from "@/components/common/cards/UserResultCard"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"

export default function Home() {
  const { t } = useTranslation()
  const [selected, setSelected] = useState("subscriptions")

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

        {/* {selected === "subscriptions" ? <Subscriptions /> : <Following />} */}
        <div className="space-y-1">
          {mockResults.map((result) =>
            result.type === "room" ? (
              <RoomResultCard key={result.id} room={result} />
            ) : (
              <UserResultCard key={result.id} user={result} />
            )
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
