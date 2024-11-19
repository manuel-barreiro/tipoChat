import React from "react"
import CardTag from "@/components/common/cards/CardTag"
import { formatStat } from "@/lib/formatStat"
import { Link } from "react-router-dom"

export default function RoomResultCard({ room }) {
  return (
    <Link to={`/room/${room.id}`}>
      <div className="flex h-32 w-full items-stretch justify-between gap-5 py-4">
        <div className="relative h-full basis-1/2">
          <img
            src={room.roomPic}
            alt={room.title}
            className="h-full w-full rounded-lg object-cover"
          />
          <p className="absolute bottom-0 left-0 flex items-center gap-2 pb-1 pl-2">
            <span className="h-3 w-3 rounded-full bg-red"></span>
            <span className="text-body-medium font-semibold">
              {formatStat(room.viewers)}
            </span>
          </p>
        </div>
        <div className="flex h-full basis-1/2 flex-col items-start justify-between">
          <span className="flex items-center gap-2">
            <img
              src={room.userPic}
              className="h-7 w-7 rounded-full"
              alt={room.owner}
            />
            <h4 className="text-body-large font-semibold">{room.owner}</h4>
          </span>
          <h3 className="text-body-medium text-gray-300">{room.title}</h3>
          <div className="flex items-center gap-2">
            {room.tags.slice(0, 2).map((tag) => (
              <CardTag key={tag} text={tag} variant="default" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
