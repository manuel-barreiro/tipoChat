import { useSearchParams } from "react-router-dom"
import Header from "@/components/common/search-bar/SearchHeader"
import BackButton from "@/components/common/buttons/BackButton"
import { SearchNotFoundIcon } from "@/assets/icons"
import RoomResultCard from "@/components/common/cards/RoomResultCard"
import UserResultCard from "@/components/common/cards/UserResultCard"
import { mockResults } from "@/static/mockSearchResults"

export const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""

  const filteredResults = mockResults.filter((result) =>
    (result.title || result.name).toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Header initialQuery={query} button={<BackButton />} />

      <div className="mt-[65px]">
        {query && filteredResults.length > 0 ? (
          <div className="space-y-1">
            {filteredResults.map((result) =>
              result.type === "room" ? (
                <RoomResultCard key={result.id} room={result} />
              ) : (
                <UserResultCard key={result.id} user={result} />
              )
            )}
          </div>
        ) : query ? (
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <SearchNotFoundIcon className="w-[90%]" />
            <p className="text-body-xlarge font-semibold">Not Found</p>
            <p className="text-body-medium font-normal">
              Sorry, the keyword you entered cannot be found, please check again
              or search with another keyword.
            </p>
          </div>
        ) : null}
      </div>
    </>
  )
}