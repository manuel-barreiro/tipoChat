import React from "react"
import { EncoderIcon, GoLiveIcon, StartStreamingImage } from "@/assets/icons"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function StartStreaming() {
  return (
    <div className="flex flex-col items-center gap-10">
      <StartStreamingImage className="h-auto w-64" />

      <div className="space-y-3 text-center">
        <h1 className="text-heading-3">Go Live Now!</h1>
        <p className="text-body-medium">
          Always remember to follow{" "}
          <span className="text-primary">Tipo Chat Community Guidelines</span>:
          illegal activities, violence, harrashment, hate speech, gore, sex, and
          nudity are inappropriate.
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <Link to={"live-mic"}>
          <button className="flex w-full items-center gap-5 rounded-[32px] bg-dark-2 p-6">
            <div className="rounded-full bg-[#019B8314]/10 p-4">
              <GoLiveIcon className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col items-start gap-2 text-start">
              <h2 className="text-heading-5">Mic Live</h2>
              <p className="text-body-xsmall">
                Start a live stream and interact with your audience
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
              <h2 className="text-heading-5">Live Encoder</h2>
              <p className="text-body-xsmall">
                Use an encoder to stream to Tipo Chat
              </p>
            </div>
            <ChevronRight className="h-12 w-12 text-primary" />
          </button>
        </Link>
      </div>
    </div>
  )
}
