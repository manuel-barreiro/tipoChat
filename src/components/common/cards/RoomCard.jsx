import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CardActionChip from "@/components/common/cards/CardActionChip"
import CardTag from "@/components/common/cards/CardTag"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import ShareDrawer from "@/components/common/drawer/ShareDrawer"
import { Link } from "react-router-dom"
import { EmbedIcon, TrashIcon } from "@/assets/icons"

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

      <ActionDialog
        isOpen={isEmbedOpen}
        setIsOpen={setIsEmbedOpen}
        title="Embed this Room"
        description="Copy the link below to embed this chat room in your site."
        icon={<EmbedIcon />}
        variant="embed"
        confirmText="Copy"
        embedText={
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/eGUEAvNpz48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
      />

      <ActionDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        title="You are about to delete this room and its content"
        description="Are you sure you want to procede?"
        icon={<TrashIcon />}
        variant="error"
        confirmText="Yes, please"
        cancelText="No, take me back"
      />

      <ShareDrawer isOpen={isShareOpen} setIsOpen={setIsShareOpen} />
    </>
  )
}
