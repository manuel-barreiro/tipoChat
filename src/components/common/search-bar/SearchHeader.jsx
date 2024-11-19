import { SearchBar } from "@/components/common/search-bar/SearchBar"

const Header = ({ button, initialQuery }) => {
  return (
    <div className="absolute left-0 right-0 top-0 z-50 flex h-[60px] items-center gap-4 bg-dark-1 px-6 py-3">
      {button}
      <SearchBar initialQuery={initialQuery} />
    </div>
  )
}

export default Header
