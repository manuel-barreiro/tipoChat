import { ScrollArea } from "@/components/ui/scroll-area"
import ChatMessage from "./ChatMessage"
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

const Chat = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[340px] overflow-hidden px-6">
      <ScrollArea className="h-full w-full pb-[72px]">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </ScrollArea>
    </div>
  )
}

export default Chat
