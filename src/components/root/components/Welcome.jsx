import staticData from "@/static/staticData"

function WelcomeScreen() {
  return (
    <section className="relative z-10 flex h-auto min-h-full w-full flex-col items-center justify-end gap-12 overflow-hidden">
      <div className="absolute inset-0 bg-dark-1/50" />
      <img
        src="/images/welcome-screen-messi.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        alt=""
      />
      <div className="z-10 flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-1 text-white">
          {staticData.dict.EN.welcomeScreen.title}
        </h1>
        <p className="text-body-xlarge font-medium text-white">
          {staticData.dict.EN.welcomeScreen.description}
        </p>
      </div>
    </section>
  )
}

export default WelcomeScreen
