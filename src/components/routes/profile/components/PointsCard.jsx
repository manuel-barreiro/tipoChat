import {
  // VerifiedIcon,
  // MemberIcon,
  // SquareTopArrowIcon,
  SettingsIcon,
} from "@/assets/icons"

const BackgroundSVG = () => (
  <svg
    className="absolute inset-0 h-full w-full"
    width="382"
    height="240"
    viewBox="0 0 382 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.32">
      <path
        opacity="0.3"
        d="M237.831 -12.3608L366.137 64.0095V193.138L237.831 116.076V-12.3608Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M493.993 -12.2834L365.691 64.0068V193L493.993 116.019V-12.2834Z"
        fill="white"
      />
      <path
        opacity="0.7"
        d="M237.831 -11.938L366.137 -89L494.442 -11.938V-11.3616L366.137 65.7004L237.831 -11.3616V-11.938Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M-114 60.8933L14.3056 137.264V266.392L-114 189.33V60.8933Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M142.162 60.9707L13.8596 137.261V266.254L142.162 189.273V60.9707Z"
        fill="white"
      />
      <path
        opacity="0.7"
        d="M-114 61.3162L14.3056 -15.7458L142.611 61.3162V61.8925L14.3056 138.955L-114 61.8925V61.3162Z"
        fill="white"
      />
      <path
        opacity="0.3"
        d="M205 52.9553L258.498 84.7983V138.639L205 106.508V52.9553Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M311.808 52.9873L258.311 84.7969V138.581L311.808 106.483V52.9873Z"
        fill="white"
      />
      <path
        opacity="0.7"
        d="M205 53.1314L258.498 21L311.995 53.1314V53.3717L258.498 85.5031L205 53.3717V53.1314Z"
        fill="white"
      />
      <path
        opacity="0.3"
        d="M228.951 225.316L282.449 257.159V311L228.951 278.869V225.316Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M335.759 225.348L282.263 257.158V310.942L335.759 278.845V225.348Z"
        fill="white"
      />
      <path
        opacity="0.7"
        d="M228.951 225.492L282.449 193.361L335.947 225.492V225.733L282.449 257.864L228.951 225.733V225.492Z"
        fill="white"
      />
    </g>
  </svg>
)

export default function PointsCard({ points, subscriptionPrice, subscribers }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-secondary px-6 py-8">
      <BackgroundSVG />
      <div className="relative z-10 flex flex-col items-start justify-evenly gap-4 text-dark-1">
        <span className="text-heading-3 font-bold">Your Points: {points}</span>

        <div className="flex w-full gap-6">
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-xsmall font-medium">
              Your Subscription Price
            </span>
            <span className="text-body-medium font-semibold">
              {subscriptionPrice} Points
            </span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-body-xsmall font-medium">
              Your Subscribers
            </span>
            <span className="text-body-medium font-semibold">
              {subscribers}
            </span>
          </div>
        </div>

        <button className="flex items-center gap-2 text-lg font-semibold hover:underline">
          Edit your subscription price
          <SettingsIcon className="h-5 w-5" />
        </button>

        <button className="flex items-center gap-2 text-lg font-semibold hover:underline">
          Manage your subscriptions
          <SettingsIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
