import { Skeleton } from "@/components/ui/skeleton"

const UserInfoSkeleton = () => (
  <div className="flex w-full items-center justify-start gap-4">
    <Skeleton className="h-16 w-16 rounded-full bg-dark-3" />
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-5 bg-dark-3" />
        <Skeleton className="h-6 w-32 bg-dark-3" />
      </div>
      <Skeleton className="h-4 w-24 bg-dark-3" />
      <Skeleton className="h-4 w-48 bg-dark-3" />
    </div>
  </div>
)

const PointsCardSkeleton = () => (
  <div className="flex w-full flex-col gap-4 rounded-lg bg-dark-2 p-4">
    <div className="flex justify-between">
      <Skeleton className="h-6 w-24 bg-dark-3" />
      <Skeleton className="h-6 w-16 bg-dark-3" />
    </div>
    <div className="flex justify-between">
      <Skeleton className="h-6 w-32 bg-dark-3" />
      <Skeleton className="h-6 w-20 bg-dark-3" />
    </div>
  </div>
)

const UserActionsSkeleton = () => (
  <div className="flex w-full flex-col gap-4">
    <Skeleton className="h-10 w-full rounded-full bg-dark-3" />
    <div className="space-y-2">
      <Skeleton className="h-6 w-48 bg-dark-3" />
      <Skeleton className="h-20 w-full bg-dark-3" />
    </div>
    <div className="flex gap-2">
      <Skeleton className="h-10 w-32 rounded-full bg-dark-3" />
      <Skeleton className="h-10 w-32 rounded-full bg-dark-3" />
      <Skeleton className="h-10 w-16 rounded-full bg-dark-3" />
    </div>
  </div>
)

// const RoomsAndLinksSkeleton = () => (
//   <div className="w-full space-y-4">
//     <div className="flex justify-between">
//       <Skeleton className="h-8 w-24 bg-dark-3" />
//       <Skeleton className="h-8 w-24 bg-dark-3" />
//     </div>
//     {[...Array(2)].map((_, i) => (
//       <Skeleton key={i} className="h-32 w-full rounded-lg bg-dark-3" />
//     ))}
//   </div>
// )

export default function ProfileSkeleton() {
  return (
    <section className="flex flex-col items-center gap-8">
      <UserInfoSkeleton />
      <PointsCardSkeleton />
      <UserActionsSkeleton />
      {/* <RoomsAndLinksSkeleton /> */}
    </section>
  )
}
