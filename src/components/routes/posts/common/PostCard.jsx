import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CardActionChip from "@/components/common/cards/CardActionChip"
import CardTag from "@/components/common/cards/CardTag"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import { Link } from "react-router-dom"
import { TrashIcon } from "@/assets/icons"
import { useTranslation } from "react-i18next"
import { formatText } from "@/lib/formatText"
import { cn } from "@/lib/utils"
import { useAuth } from "@/contexts/AuthContext"
import { LockIcon } from "@/assets/icons"

export default function PostCard({
  id,
  title,
  description,
  privacy,
  tags,
  actions,
  owner,
}) {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  // Check if current user owns this post
  const isOwner = currentUser.id === owner
  const isPrivate = privacy === "Private"

  return (
    <>
      <Link to={id}>
        <Card className="flex h-full w-full flex-col gap-4 rounded-[20px] border-0 bg-dark-2 p-4 text-white">
          <CardContent className="flex h-full items-stretch justify-between gap-4 p-0">
            <div className="relative w-1/2 overflow-hidden rounded-[16px]">
              <img
                src={"/images/mockRoom.png"}
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
          {isOwner ? (
            <div className="flex justify-start gap-3">
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
          ) : (
            <button
              className={cn(
                "w-auto rounded-full border-[3px] bg-transparent px-3 py-1 text-center text-xs font-semibold duration-300 ease-in-out md:px-4",

                "border-orange text-orange hover:bg-orange hover:text-dark-2"
              )}
            >
              {"Buy: 15 Points"}
            </button>
          )}
        </Card>

        {isOwner && (
          <ActionDialog
            isOpen={isDeleteOpen}
            setIsOpen={setIsDeleteOpen}
            title={t("common.cards.postCard.deleteConfirmationDialog.title")}
            description={t(
              "common.cards.postCard.deleteConfirmationDialog.description"
            )}
            icon={<TrashIcon />}
            variant="error"
            confirmText={t(
              "common.cards.postCard.deleteConfirmationDialog.confirm"
            )}
            cancelText={t(
              "common.cards.postCard.deleteConfirmationDialog.cancel"
            )}
          />
        )}
      </Link>
    </>
  )
}
