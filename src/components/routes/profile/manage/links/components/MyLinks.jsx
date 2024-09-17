import { EditIcon, TrashIcon } from "@/assets/icons"

const mockLinks = [
  { title: "Facebook", url: "https://www.facebook.com" },
  { title: "Twitter", url: "https://www.twitter.com" },
  { title: "Instagram", url: "https://www.instagram.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "GitHub", url: "https://www.github.com" },
  { title: "Reddit", url: "https://www.reddit.com" },
]

export default function MyLinks() {
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
              <TrashIcon className="h-6 w-6 duration-300 ease-in-out hover:text-primary" />
            </button>
          </div>
        </>
      ))}
    </>
  )
}
