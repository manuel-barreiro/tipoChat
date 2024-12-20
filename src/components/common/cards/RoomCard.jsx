import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CardActionChip from "@/components/common/cards/CardActionChip"
import CardTag from "@/components/common/cards/CardTag"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import ShareDrawer from "@/components/common/drawer/ShareDrawer"
import { Link } from "react-router-dom"
import { EmbedIcon, TrashIcon } from "@/assets/icons"
import { useTranslation } from "react-i18next"
import { formatText } from "@/lib/formatText"
import { useAuth } from "@/contexts/AuthContext"
import { LockIcon } from "@/assets/icons"

export default function RoomCard({
  id,
  title,
  description,
  privacy,
  tags,
  actions,
  owner,
  roomPic,
}) {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [isEmbedOpen, setIsEmbedOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  // Check if current user owns this room
  const isOwner = currentUser.id === owner
  const isPrivate = privacy === "Private"

  return (
    <>
      <Link to={`/room/${id}`}>
        <Card className="flex h-full w-full flex-col gap-4 rounded-[20px] border-0 bg-dark-2 p-4 text-white">
          <CardContent className="flex h-full items-stretch justify-between gap-4 p-0">
            <div className="relative w-1/2 overflow-hidden rounded-[16px]">
              <img
                src={!isOwner && isPrivate ? "/images/mockRoom.png" : roomPic}
                alt={title}
                className="h-24 w-52 rounded-[16px] object-cover"
              />
              {!isOwner && isPrivate && (
                <LockIcon className="absolute right-[43%] top-[40%] text-[#212121]" />
              )}
            </div>

            <div className="flex h-full w-1/2 flex-col">
              <h3 className="text-heading-5 font-bold">
                {formatText(title, 11)}
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                {formatText(description, 120)}
              </p>
              <div className="mt-1 flex flex-wrap justify-start gap-2">
                <CardTag text={privacy} variant="primary" />
                {tags.slice(0, 1).map((tag) => (
                  <CardTag key={tag} text={tag} variant="secondary" />
                ))}
              </div>
            </div>
          </CardContent>
          {isOwner && (
            <div className="flex justify-between">
              {actions.embed && (
                <CardActionChip
                  action="embed"
                  onClick={() => setIsEmbedOpen(true)}
                />
              )}
              {actions.share && (
                <CardActionChip
                  action="share"
                  onClick={() => setIsShareOpen(true)}
                />
              )}
              {actions.edit && (
                <Link to="edit">
                  <CardActionChip action="edit" />
                </Link>
              )}
              {actions.delete && (
                <CardActionChip
                  action="delete"
                  onClick={() => setIsDeleteOpen(true)}
                />
              )}
            </div>
          )}
        </Card>
        {isOwner && (
          <>
            <ActionDialog
              isOpen={isEmbedOpen}
              setIsOpen={setIsEmbedOpen}
              title={t("common.cards.roomCard.embedDialog.title")}
              description={t("common.cards.roomCard.embedDialog.description")}
              icon={<EmbedIcon />}
              variant="embed"
              confirmText={t("common.cards.roomCard.embedDialog.copy")}
              cancelText={t("common.cards.roomCard.embedDialog.cancel")}
              embedText={
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/eGUEAvNpz48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
              }
            />

            <ActionDialog
              isOpen={isDeleteOpen}
              setIsOpen={setIsDeleteOpen}
              title={t("common.cards.roomCard.deleteConfirmationDialog.title")}
              description={t(
                "common.cards.roomCard.deleteConfirmationDialog.description"
              )}
              icon={<TrashIcon />}
              variant="error"
              confirmText={t(
                "common.cards.roomCard.deleteConfirmationDialog.confirm"
              )}
              cancelText={t(
                "common.cards.roomCard.deleteConfirmationDialog.cancel"
              )}
            />

            <ShareDrawer isOpen={isShareOpen} setIsOpen={setIsShareOpen} />
          </>
        )}
      </Link>
    </>
  )
}
