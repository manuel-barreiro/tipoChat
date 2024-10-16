import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CardActionChip from "@/components/common/cards/CardActionChip"
import CardTag from "@/components/common/cards/CardTag"
import EmbedRoomDialog from "@/components/common/dialog/EmbedRoomDialog"
import DeleteDialog from "@/components/common/dialog/DeleteDialog"
import ShareDrawer from "@/components/common/drawer/ShareDrawer"
import { Link } from "react-router-dom"

function formatText(text, maxChars) {
  if (text.length > maxChars) {
    return text.substring(0, maxChars) + "..."
  }
  return text
}

export default function RoomCard({
  id,
  title,
  description,
  privacy,
  tags,
  actions,
}) {
  const [isEmbedOpen, setIsEmbedOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  return (
    <>
      <Card className="flex h-full w-full flex-col gap-4 rounded-[20px] border-0 bg-dark-2 p-4 text-white">
        <CardContent className="flex h-full items-stretch justify-between gap-4 p-0">
          <div className="w-1/2 overflow-hidden rounded-[16px]">
            <img
              src="/images/mockRoom.png"
              alt="room image"
              title={id}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex h-full w-1/2 flex-col">
            <h3 className="text-heading-5 font-bold">
              {formatText(title, 15)}
            </h3>
            <p className="mt-1 text-sm text-gray-300">
              {formatText(description, 120)}
            </p>
            <div className="md: mt-2 flex justify-start gap-1">
              <CardTag text={privacy} variant="primary" />
              {tags.map((tag) => (
                <CardTag key={tag} text={tag} variant="secondary" />
              ))}
            </div>
          </div>
        </CardContent>

        <div className="flex justify-between gap-2 md:justify-around">
          {actions.embed && (
            <CardActionChip
              action="Embed"
              onClick={() => setIsEmbedOpen(true)}
            />
          )}
          {actions.share && (
            <CardActionChip
              action="Share"
              onClick={() => setIsShareOpen(true)}
            />
          )}
          {actions.edit && (
            <Link to="edit">
              <CardActionChip action="Edit" />
            </Link>
          )}
          {actions.delete && (
            <CardActionChip
              action="Delete"
              onClick={() => setIsDeleteOpen(true)}
            />
          )}
        </div>
      </Card>

      <EmbedRoomDialog isOpen={isEmbedOpen} setIsOpen={setIsEmbedOpen} />

      <DeleteDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        text="room"
      />
      <ShareDrawer isOpen={isShareOpen} setIsOpen={setIsShareOpen} />
    </>
  )
}
