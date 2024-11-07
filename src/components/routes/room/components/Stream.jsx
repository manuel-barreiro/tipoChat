import {
  EmbedIcon,
  ViewersIcon,
  CopyIcon,
  SendMessagesIcon,
  InfoReportIcon,
} from "@/assets/icons"
import TipoChatDropdownMenu from "@/components/common/dropdown/TipoChatDropdownMenu"

export default function Stream({ user }) {
  const getMenuItems = () => {
    const baseItems = [
      <div key={0} className="flex items-center gap-2">
        <SendMessagesIcon className="h-4 w-4" />
        <span>Share Chat</span>
      </div>,
      <div key={1} className="flex items-center gap-2">
        <EmbedIcon className="h-4 w-4" />
        <span>Embed Chat</span>
      </div>,
      <div key={2} className="flex items-center gap-2">
        <CopyIcon className="h-4 w-4" />

        <span>Copy Link</span>
      </div>,
    ]

    if (user?.role === "user") {
      return [
        <div key={-1} className="flex items-center gap-2">
          <InfoReportIcon className="h-4 w-4 rotate-180" />
          <span>About This Room</span>
        </div>,
        ...baseItems,
        <div key={3} className="flex items-center gap-2">
          <InfoReportIcon className="h-4 w-4" />

          <span>Report Chat</span>
        </div>,
      ]
    }

    return baseItems
  }

  return (
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
          <TipoChatDropdownMenu menuItems={getMenuItems()} />
        </div>
      </div>
    </div>
  )
}
