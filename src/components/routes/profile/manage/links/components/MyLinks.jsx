import { EditIcon, TrashIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import ChangesSavedDialog from "@/components/common/dialog/ChangesSavedDialog"
import ConfirmDialog from "@/components/common/dialog/ConfirmDialog"
import { useState } from "react"

const mockLinks = [
  { title: "Facebook", url: "https://www.facebook.com" },
  { title: "Twitter", url: "https://www.twitter.com" },
  { title: "Instagram", url: "https://www.instagram.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "GitHub", url: "https://www.github.com" },
  { title: "Reddit", url: "https://www.reddit.com" },
]

export default function MyLinks() {
  const [isOpenSaveChanges, setIsOpenSaveChanges] = useState(false)
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)

  return (
    <>
      {mockLinks.map((link) => (
        <>
          <div
            key={link.url}
            className="relative mb-2 flex w-full flex-col justify-around gap-2"
          >
            <p className="font-semibold">{link.title}</p>
            <button className="w-full rounded-[16px] bg-dark-2 p-4 text-left">
              {link.url}
            </button>
            <button className="absolute right-8 top-0">
              <EditIcon className="h-6 w-6 duration-300 ease-in-out hover:text-primary" />
            </button>
            <button className="absolute right-0 top-0">
              <TrashIcon
                onClick={() => setIsOpenConfirm(true)}
                className="h-6 w-6 duration-300 ease-in-out hover:text-primary"
              />
            </button>
          </div>
        </>
      ))}
      <FixedBottomButton
        text="Save Changes"
        onClick={() => setIsOpenSaveChanges(true)}
      />
      <ConfirmDialog
        isOpen={isOpenConfirm}
        setIsOpen={setIsOpenConfirm}
        title={"Are you sure?"}
        description={"This action cannot be undone"}
      />
      <ChangesSavedDialog
        isOpen={isOpenSaveChanges}
        setIsOpen={setIsOpenSaveChanges}
        title={"Changes Saved"}
        description={"You’ve succesfully saved your changes"}
      />
    </>
  )
}
