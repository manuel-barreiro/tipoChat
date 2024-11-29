import { EditIcon, TrashIcon, WarningIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import SuccessDialog from "@/components/common/dialog/SuccessDialog"
import { useState } from "react"
import { useTranslation } from "react-i18next"

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
  const { t } = useTranslation()

  function onSaveChanges() {
    setIsOpenSaveChanges(true)
    setTimeout(() => {
      setIsOpenSaveChanges(false)
    }, 2000)
  }

  return (
    <>
      <div className="h-auto min-h-[80dvh]">
        {mockLinks.map((link) => (
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
        ))}
      </div>
      <FixedBottomButton
        text={t("profile.manage.links.saveChanges.button")}
        onClick={() => onSaveChanges()}
      />
      <ActionDialog
        isOpen={isOpenConfirm}
        setIsOpen={setIsOpenConfirm}
        icon={<WarningIcon />}
        variant="error"
        title={t("profile.manage.links.deleteDialog.title")}
        description={t("profile.manage.links.deleteDialog.description")}
        confirmText={t("profile.manage.links.deleteDialog.confirm")}
        cancelText={t("profile.manage.links.deleteDialog.cancel")}
      />
      <SuccessDialog
        isOpen={isOpenSaveChanges}
        title={t("profile.manage.links.saveChanges.successTitle")}
        description={t("profile.manage.links.saveChanges.successDescription")}
      />
    </>
  )
}
