import PrimaryButton from "@/components/common/buttons/PrimaryButton"
import UserInfo from "../components/UserInfo"
import { mockUser } from "@/static/mockUser"
import { MemberIcon, HeartIcon, GiftIcon, BlockIcon } from "@/assets/icons"
import ToggleRoomsAndLinks from "@/components/routes/profile/user/components/ToggleRoomsAndLinks"

export default function UserProfile() {
  return (
    <section className="flex flex-col items-center gap-5">
      <UserInfo
        name={mockUser.fullName}
        nickName={mockUser.nickName}
        profilePicUrl={mockUser.profilePicUrl}
        isVerified={mockUser.isVerified}
        followers={mockUser.data.followers}
        following={mockUser.data.following}
      />
      <PrimaryButton
        className="bg-primary-100"
        text="Suscribe 10 Points/ Month"
        shadow
        icon={<MemberIcon className="text-primary" />}
      />
      <div className="flex flex-col items-start gap-3">
        <h6 className="text-heading-6 font-semibold">
          About UserName -{" "}
          <span className="text-body-small font-medium">Man, 28 - ESP</span>
        </h6>
        <p className="text-justify text-body-medium font-semibold">
          {mockUser.bio}
        </p>
      </div>

      <div className="flex w-full gap-2">
        <PrimaryButton
          text="Follow"
          className="basis-2/5 gap-2 px-0"
          icon={<HeartIcon className="text-dark-2" />}
        />
        <PrimaryButton
          text="Send Gift"
          className="basis-2/5 gap-2 border border-white bg-dark-2 p-0 text-white"
          icon={<GiftIcon className="text-dark-2" />}
        />
        <PrimaryButton
          text=""
          className="basis-1/5 border border-primary bg-dark-2 px-0"
          icon={<BlockIcon className="h-6 w-6 text-primary" />}
        />
      </div>

      <ToggleRoomsAndLinks rooms={mockUser.rooms} links={mockUser.links} />
    </section>
  )
}
