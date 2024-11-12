import { useState } from "react"
import {
  ChatMenuIcon,
  GoLiveIcon,
  PostIcon,
  SendMessagesIcon,
} from "@/assets/icons"
import { ChevronLeft } from "lucide-react"
import { Link } from "react-router-dom"

const BottomMenu = ({ user }) => {
  const [showChatInput, setShowChatInput] = useState(false)

  return (
    <div className="absolute bottom-0 left-0 right-0 flex h-[72px] items-center justify-around rounded-t-[24px] border-t border-dark-3 !bg-dark-1/85 px-8 py-4 !backdrop-blur">
      {showChatInput ? (
        <div className="relative flex-1">
          <button className="absolute left-3 top-1/2 -translate-y-1/2">
            <ChevronLeft
              size={20}
              className="text-primary"
              onClick={() => setShowChatInput(false)}
            />
          </button>
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full rounded-xl bg-dark-2 px-12 py-2 text-body-medium text-grey-50 placeholder:text-grey-600"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <SendMessagesIcon className="text-primary" />
          </button>
        </div>
      ) : (
        <>
          <button
            className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary"
            onClick={() => setShowChatInput(true)}
          >
            <ChatMenuIcon size={24} />
            <span className="text-body-xsmall">Chat</span>
          </button>
          {user.role === "admin" ? (
            <Link to={"go-live"}>
              <button className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary">
                <GoLiveIcon size={24} />
                <span className="text-body-xsmall">Go Live</span>
              </button>
            </Link>
          ) : (
            <button className="relative flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary">
              <img src={user.avatar} alt="avatar" className="w-14" />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-primary"></span>
            </button>
          )}
          <button className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary">
            <PostIcon size={24} />
            <span className="text-body-xsmall">Post</span>
          </button>
        </>
      )}
    </div>
  )
}

export default BottomMenu
