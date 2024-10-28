import React, { useState } from "react"
import { Trash2Icon, BanIcon } from "lucide-react"
import { TrashIcon, BanIcon as BanIconFilled } from "@/assets/icons"
import ActionDialog from "@/components/common/dialog/ActionDialog"

export default function UserDisplay({
  profilePic,
  nickName,
  followers,
  pathname,
}) {
  const [isUnfollowDialogOpen, setIsUnfollowDialogOpen] = useState(false)
  const [isBanDialogOpen, setIsBanDialogOpen] = useState(false)
  const [isRemoveBanDialogOpen, setIsRemoveBanDialogOpen] = useState(false)

  const handleUnfollow = () => {
    // Handle unfollow logic here
    setIsUnfollowDialogOpen(false)
  }

  const handleBan = () => {
    // Handle ban logic here
    setIsBanDialogOpen(false)
  }

  const handleRemoveBan = () => {
    // Handle remove ban logic here
    setIsRemoveBanDialogOpen(false)
  }

  const isBannedUsersPage = pathname === "/community/banned"

  return (
    <>
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <img
            src={profilePic}
            alt="profile"
            className="h-12 w-12 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="text-body-medium">{nickName}</span>
            <span className="text-body-xsmall">{followers} followers</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isBannedUsersPage ? (
            <button
              className="items center flex gap-2 rounded-full border border-green px-4 py-2 text-green"
              onClick={() => setIsRemoveBanDialogOpen(true)}
            >
              Remove Ban
              <BanIcon className="text-green" />
            </button>
          ) : (
            <>
              <button
                className="rounded-2xl border border-disabled px-4 py-2 text-disabled"
                onClick={() => setIsUnfollowDialogOpen(true)}
              >
                <Trash2Icon />
              </button>
              <button
                className="rounded-2xl border border-red px-4 py-2 text-red"
                onClick={() => setIsBanDialogOpen(true)}
              >
                <BanIcon />
              </button>
            </>
          )}
        </div>
      </div>

      <ActionDialog
        isOpen={isUnfollowDialogOpen}
        setIsOpen={setIsUnfollowDialogOpen}
        title="Unfollow User"
        description="Are you sure you want to unfollow this user?"
        icon={<TrashIcon className="mb-4 h-14 w-14 text-disabled" />}
        onConfirm={handleUnfollow}
        titleColor="text-disabled"
      />

      <ActionDialog
        isOpen={isBanDialogOpen}
        setIsOpen={setIsBanDialogOpen}
        title="Ban User"
        description="Are you sure you want to ban this user?"
        icon={<BanIconFilled className="mb-4 h-14 w-14 text-red" />}
        onConfirm={handleBan}
        titleColor="text-red"
      />

      <ActionDialog
        isOpen={isRemoveBanDialogOpen}
        setIsOpen={setIsRemoveBanDialogOpen}
        title="Remove Ban"
        description="Are you sure you want to remove the ban for this user?"
        icon={<BanIconFilled className="mb-4 h-14 w-14 text-green" />}
        onConfirm={handleRemoveBan}
        titleColor="text-green"
      />
    </>
  )
}
