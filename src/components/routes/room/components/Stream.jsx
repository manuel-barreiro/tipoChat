import {
  EmbedIcon,
  ViewersIcon,
  CopyIcon,
  SendMessagesIcon,
  InfoReportIcon,
  WarningIcon,
} from "@/assets/icons"
import DropdownMenu from "@/components/common/dropdown/DropdownMenu"
import { useState } from "react"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import ShareDrawer from "@/components/common/drawer/ShareDrawer"
import { useTranslation } from "react-i18next"

export default function Stream({ room, isOwner }) {
  const [isEmbedOpen, setIsEmbedOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isReportOpen, setIsReportOpen] = useState(false)
  const { t } = useTranslation()

  const getMenuItems = () => {
    const baseItems = [
      <button
        onClick={() => {
          setIsShareOpen(true)
          setIsDropdownOpen(false) // Cerrar dropdown
        }}
        key={0}
        className="flex items-center gap-2"
      >
        <SendMessagesIcon className="h-4 w-4" />
        <span>{t("room.stream.dropdown.share")}</span>
      </button>,
      <button
        onClick={() => {
          setIsEmbedOpen(true)
          setIsDropdownOpen(false) // Cerrar dropdown
        }}
        key={1}
        className="flex items-center gap-2"
      >
        <EmbedIcon className="h-4 w-4" />
        <span>{t("room.stream.dropdown.embed")}</span>
      </button>,
      <button onClick={() => {}} key={2} className="flex items-center gap-2">
        <CopyIcon className="h-4 w-4" />

        <span>{t("room.stream.dropdown.copy")}</span>
      </button>,
    ]

    if (!isOwner) {
      return [
        <button
          onClick={() => {
            setIsAboutOpen(true)
            setIsDropdownOpen(false) // Cerrar dropdown
          }}
          key={-1}
          className="flex items-center gap-2"
        >
          <InfoReportIcon className="h-4 w-4 rotate-180" />
          <span>{t("room.stream.dropdown.about")}</span>
        </button>,
        ...baseItems,
        <button
          onClick={() => {
            setIsReportOpen(true)
            setIsDropdownOpen(false) // Cerrar dropdown
          }}
          key={3}
          className="flex items-center gap-2"
        >
          <InfoReportIcon className="h-4 w-4" />
          <span>{t("room.stream.dropdown.report")}</span>
        </button>,
      ]
    }

    return baseItems
  }

  return (
    <>
      <div className="absolute left-0 right-0 top-[60px] flex h-[280px] flex-col justify-around overflow-hidden px-6 pb-[10px]">
        <img src="/images/streamPreview.png" className="w-full" alt="" />
        <div className="mt-2 w-full">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <ViewersIcon className="text-white" />
              <span className="text-body-xsmall text-white">
                {room.viewers}
              </span>
            </div>
            <h2 className="text-body-large font-medium">{room.title}</h2>
            <DropdownMenu
              menuItems={getMenuItems()}
              onOpenChange={setIsDropdownOpen}
              open={isDropdownOpen}
            />
          </div>
        </div>
      </div>
      <ShareDrawer isOpen={isShareOpen} setIsOpen={setIsShareOpen} />
      <ActionDialog
        isOpen={isEmbedOpen}
        setIsOpen={setIsEmbedOpen}
        title={t("room.stream.embedDialog.title")}
        description={t("room.stream.embedDialog.description")}
        icon={<EmbedIcon />}
        variant="embed"
        confirmText={t("room.stream.embedDialog.copy")}
        cancelText={t("room.stream.embedDialog.cancel")}
        embedText={
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/eGUEAvNpz48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
      />
      <ActionDialog
        isOpen={isAboutOpen}
        setIsOpen={setIsAboutOpen}
        title={t("room.stream.aboutDialog.title")}
        description={t("room.stream.aboutDialog.description")}
        icon={<InfoReportIcon className="rotate-180" />}
        variant="default"
        confirmText={t("room.stream.aboutDialog.close")}
        showCancel={false}
      />
      <ActionDialog
        isOpen={isReportOpen}
        setIsOpen={setIsReportOpen}
        title={t("room.stream.reportDialog.title")}
        description={t("room.stream.reportDialog.description")}
        icon={<WarningIcon />}
        variant="warning"
        confirmText={t("room.stream.reportDialog.confirm")}
        cancelText={t("room.stream.reportDialog.cancel")}
      />
    </>
  )
}
