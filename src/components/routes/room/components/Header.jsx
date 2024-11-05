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

export default Header
