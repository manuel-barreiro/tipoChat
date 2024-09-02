function WelcomeScreen() {
  return (
    <section className="relative z-10 flex h-auto min-h-screen w-full flex-col items-center justify-end gap-12 overflow-hidden">
      <div className="bg-dark-1/50 absolute inset-0" />
      <img
        src="images/welcome-screen-messi.jpeg"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        alt=""
      />
      <div className="z-10 flex flex-col gap-5 px-5 pb-6 text-center">
        <h1 className="text-heading-1 text-white">Welcome to TipoChat! 👋</h1>
        <p className="text-body-xlarge font-medium text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  )
}

export default WelcomeScreen
