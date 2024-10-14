import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import CardActionChip from "@/components/common/cards/CardActionChip"
import CardTag from "@/components/common/cards/CardTag"
import DeleteDialog from "@/components/common/dialog/DeleteDialog"
import { Link } from "react-router-dom"
import { LockIcon } from "@/assets/icons"

function formatText(text, maxChars) {
  if (text.length > maxChars) {
    return text.substring(0, maxChars) + "..."
  }
  return text
}

export default function PostCard({
  id,
  title,
  description,
  privacy,
  price,
  tags,
  viewer,
  owner,
}) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  return (
    <>
      <Card className="flex h-full w-full flex-col gap-4 rounded-[20px] border-0 bg-dark-2 p-4 text-white">
        <CardContent className="flex h-full items-stretch justify-between gap-4 p-0">
          <div className="relative w-1/2 overflow-hidden rounded-[16px]">
            <img
              src="/images/mockRoom.png"
              alt="room image"
              title={id}
              className="h-full w-full object-cover"
            />
            {viewer !== owner && price > 0 && (
              <LockIcon className="absolute right-[43%] top-[40%] text-[#212121]" />
            )}
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

        {viewer === owner ? (
          <div className="flex justify-start gap-2">
            <Link to="edit">
              <CardActionChip action="Edit" />
            </Link>

            <CardActionChip
              action="Delete"
              onClick={() => setIsDeleteOpen(true)}
            />
          </div>
        ) : (
          <div className="flex justify-start gap-2">
            <button className="rounded-full border-[3px] border-orange bg-transparent px-4 py-1 text-center text-xs font-semibold text-orange duration-300 ease-in-out hover:bg-orange hover:text-dark-2 md:text-sm">
              {price === 0 ? "Price: Free" : `Buy: ${price} Points`}
            </button>
          </div>
        )}
      </Card>

      <DeleteDialog
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        text="post"
      />
    </>
  )
}
