import { useState } from "react"
import { cn } from "@/lib/utils"
import { useTranslation } from "react-i18next"
import AddLinkForm from "@/components/routes/profile/manage/links/components/AddLinkForm"
import MyLinks from "@/components/routes/profile/manage/links/components/MyLinks"

export default function ManageLinks() {
  const [selected, setSelected] = useState("add")
  const { t } = useTranslation()

  return (
    <section className="flex h-full flex-col gap-4">
      <p>{t("profile.manage.links.title")}</p>
      <div className="flex w-full items-center justify-between">
        <button
          onClick={() => setSelected("add")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "add" && "border-primary text-primary"
          )}
        >
          {t("profile.manage.links.tabs.addNew")}
        </button>
        <button
          onClick={() => setSelected("myUrls")}
          className={cn(
            "w-full border-b-2 border-grey-700 py-3 font-semibold text-grey-700 duration-300 ease-in-out",
            selected === "myUrls" && "border-primary text-primary"
          )}
        >
          {t("profile.manage.links.tabs.myUrls")}
        </button>
      </div>

      {selected === "add" && <AddLinkForm />}
      {selected === "myUrls" && <MyLinks />}
    </section>
  )
}
