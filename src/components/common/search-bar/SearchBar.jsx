// components/SearchBar.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const SearchBar = ({ initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </form>
  )
}
