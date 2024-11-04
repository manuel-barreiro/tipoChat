import React from "react"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { EllipsisVertical } from "lucide-react"
import { ViewersIcon, ChatMenuIcon, GoLiveIcon, PostIcon } from "@/assets/icons"

const messages = [
  {
    avatar: "/images/mockProfilePics/titus.png",
    author: "Chad Titus",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/annabelle.png",
    author: "Annabel Rohan",
    message: "You guys are amazing 🔥🔥🔥",
  },
  {
    avatar: "/images/mockProfilePics/georgette.png",
    author: "Georgette Strobel",
    message: "LOL... How did he get there so quickly 🤣🤣🤣",
  },
  {
    avatar: "/images/mockProfilePics/rodolfo.png",
    author: "Rodolfo",
    message: "This is incredible!",
  },
  {
    avatar: "/images/mockProfilePics/johnsie.png",
    author: "Johnsie Jock",
    message: "I love the games like this one. ❤️❤️",
  },
  {
    avatar: "/images/mockProfilePics/alfonzo.png",
    author: "Alfonzo",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/rodolfo.png",
    author: "Rodolfo",
    message: "This is incredible!",
  },
  {
    avatar: "/images/mockProfilePics/johnsie.png",
    author: "Johnsie Jock",
    message: "I love the games like this one. ❤️❤️",
  },
  {
    avatar: "/images/mockProfilePics/alfonzo.png",
    author: "Alfonzo",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/rodolfo.png",
    author: "Rodolfo",
    message: "This is incredible!",
  },
  {
    avatar: "/images/mockProfilePics/johnsie.png",
    author: "Johnsie Jock",
    message: "I love the games like this one. ❤️❤️",
  },
  {
    avatar: "/images/mockProfilePics/alfonzo.png",
    author: "Alfonzo",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/titus.png",
    author: "Chad Titus",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/annabelle.png",
    author: "Annabel Rohan",
    message: "You guys are amazing 🔥🔥🔥",
  },
  {
    avatar: "/images/mockProfilePics/georgette.png",
    author: "Georgette Strobel",
    message: "LOL... How did he get there so quickly 🤣🤣🤣",
  },
  {
    avatar: "/images/mockProfilePics/titus.png",
    author: "Chad Titus",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/annabelle.png",
    author: "Annabel Rohan",
    message: "You guys are amazing 🔥🔥🔥",
  },
  {
    avatar: "/images/mockProfilePics/georgette.png",
    author: "Georgette Strobel",
    message: "LOL... How did he get there so quickly 🤣🤣🤣",
  },
  {
    avatar: "/images/mockProfilePics/titus.png",
    author: "Chad Titus",
    message: "Greetings from Argentina 🥰",
  },
  {
    avatar: "/images/mockProfilePics/annabelle.png",
    author: "Annabel Rohan",
    message: "You guys are amazing 🔥🔥🔥",
  },
  {
    avatar: "/images/mockProfilePics/georgette.png",
    author: "Georgette Strobel",
    message: "LOL... How did he get there so quickly 🤣🤣🤣",
  },
]

const ChatMessage = ({ avatar, author, message }) => {
  return (
    <div className="flex w-full items-center gap-3 py-1">
      <div className="h-7 w-7 flex-shrink-0 overflow-hidden rounded-full">
        <img src={avatar} alt={author} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="mb-1 text-[10px] font-medium text-disabled">{author}</h3>
        <p className="text-body-xsmall">{message}</p>
      </div>
    </div>
  )
}

// Bottom menu component
const BottomMenu = () => {
  const [showChatInput, setShowChatInput] = useState(false)

  return (
    <div className="absolute bottom-0 left-0 right-0 flex h-[72px] items-center justify-between border-t border-dark-3 bg-dark-1 px-8 py-4">
      {showChatInput ? (
        <>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 rounded-full bg-dark-2 px-6 py-2 text-body-medium text-grey-50 placeholder:text-grey-600"
          />
          <button
            className="ml-4 text-grey-400 transition-colors hover:text-grey-50"
            onClick={() => setShowChatInput(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          <button
            className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary"
            onClick={() => setShowChatInput(true)}
          >
            <ChatMenuIcon size={24} />
            <span className="text-body-xsmall">Chat</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary">
            <GoLiveIcon size={24} />
            <span className="text-body-xsmall">Go Live</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-grey-400 transition-colors hover:text-primary">
            <PostIcon size={24} />
            <span className="text-body-xsmall">Post</span>
          </button>
        </>
      )}
    </div>
  )
}

const Header = () => {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 flex h-[60px] items-center bg-dark-1 px-6 py-3">
      <button className="mr-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 18H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-xl bg-dark-2 px-6 py-2 pr-12 text-body-medium text-grey-50 placeholder:text-grey-600"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 text-grey-600"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
    </div>
  )
}

// Main chat component
const ChatInterface = () => {
  return (
    <>
      <Header />

      {/* Stream */}
      <div className="absolute left-0 right-0 top-[70px] flex h-auto w-full flex-col items-center px-6">
        {/* Stream preview */}
        <img src="/images/streamPreview.png" className="w-full" alt="" />

        {/* Stream title */}
        <div className="mt-2 w-full border-b border-dark-3 py-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <ViewersIcon className="text-white" />
              <span className="text-body-xsmall text-white">000K</span>
            </div>
            <h2 className="text-body-large font-medium">
              Los Simpson, Lorem Ipsum
            </h2>
            <EllipsisVertical size={24} className="text-grey-600" />
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="absolute bottom-[72px] left-0 right-0 top-[340px] overflow-hidden pl-6 sm:top-[345px]">
        <ScrollArea className="h-full w-full py-1">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}
        </ScrollArea>
      </div>

      {/* Bottom navigation */}
      <BottomMenu />
    </>
  )
}

export default ChatInterface
