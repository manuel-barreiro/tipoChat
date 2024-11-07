import {
  EmbedIcon,
  ViewersIcon,
  CopyIcon,
  SendMessagesIcon,
  InfoReportIcon,
  WarningIcon,
} from "@/assets/icons"
import TipoChatDropdownMenu from "@/components/common/dropdown/TipoChatDropdownMenu"
import { useState } from "react"
import ActionDialog from "@/components/common/dialog/ActionDialog"
import ShareDrawer from "@/components/common/drawer/ShareDrawer"

export default function Stream({ user }) {
  const [isEmbedOpen, setIsEmbedOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isReportOpen, setIsReportOpen] = useState(false)

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
        <span>Share Chat</span>
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
        <span>Embed Chat</span>
      </button>,
      <button onClick={() => {}} key={2} className="flex items-center gap-2">
        <CopyIcon className="h-4 w-4" />

        <span>Copy Link</span>
      </button>,
    ]

    if (user?.role === "user") {
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
          <span>About This Room</span>
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
          <span>Report Chat</span>
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
              <span className="text-body-xsmall text-white">100K</span>
            </div>
            <h2 className="text-body-large font-medium">
              Los Simpson, Lorem Ipsum
            </h2>
            <TipoChatDropdownMenu
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
        isOpen={isAboutOpen}
        setIsOpen={setIsAboutOpen}
        title="About This Room"
        description="This room is for discussing various topics related to The Simpsons."
        icon={<InfoReportIcon className="rotate-180" />}
        variant="default"
        confirmText="Close"
        showCancel={false}
      />
      <ActionDialog
        isOpen={isReportOpen}
        setIsOpen={setIsReportOpen}
        title="Report Chat"
        description="Are you sure you want to report this chat?"
        icon={<WarningIcon />}
        variant="warning"
        confirmText="Yes, report"
        cancelText="Cancel"
      />
    </>
  )
}
