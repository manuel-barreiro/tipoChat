import BackButton from "@/components/buttons/BackButton"

export default function NavBar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 flex h-12 w-full items-center justify-start bg-dark-1 py-5">
      <BackButton />
    </nav>
  )
}
