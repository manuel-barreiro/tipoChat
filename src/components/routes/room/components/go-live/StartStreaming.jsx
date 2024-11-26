import React from "react"
import { EncoderIcon, GoLiveIcon, StartStreamingImage } from "@/assets/icons"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function StartStreaming() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-10">
      <StartStreamingImage className="h-auto w-64" />

      <div className="space-y-3 text-center">
        <h1 className="text-heading-3">{t("room.go-live.title")}</h1>
        <p className="text-body-medium">
          {t("room.go-live.guidelines.text")}{" "}
          <span className="text-primary">
            {t("room.go-live.guidelines.link")}
          </span>
          : {t("room.go-live.guidelines.description")}
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <Link to={"live-mic"}>
          <button className="flex w-full items-center gap-5 rounded-[32px] bg-dark-2 p-6">
            <div className="rounded-full bg-[#019B8314]/10 p-4">
              <GoLiveIcon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col items-start gap-2 text-start">
              <h2 className="text-heading-5">
                {t("room.go-live.options.mic.title")}
              </h2>
              <p className="text-body-xsmall">
                {t("room.go-live.options.mic.description")}
              </p>
            </div>
            <ChevronRight className="h-12 w-12 text-primary" />
          </button>
        </Link>
        <Link to={"live-encoder"}>
          <button className="flex w-full items-center gap-5 rounded-[32px] bg-dark-2 p-6">
            <div className="rounded-full bg-[#019B8314]/10 p-4">
              <EncoderIcon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex flex-col items-start gap-2 text-start">
              <h2 className="text-heading-5">
                {t("room.go-live.options.encoder.title")}
              </h2>
              <p className="text-body-xsmall">
                {t("room.go-live.options.encoder.description")}
              </p>
            </div>
            <ChevronRight className="h-12 w-12 text-primary" />
          </button>
        </Link>
      </div>
    </div>
  )
}
