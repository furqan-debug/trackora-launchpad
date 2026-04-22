import trackoraLogo from "@/assets/trackora-logo.png";

const Index = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-page px-6 py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-14rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-accent/70 blur-3xl" aria-hidden="true" />

      <section className="z-10 flex w-full max-w-4xl flex-col items-center justify-center gap-9 text-center">
        <div className="motion-safe-only animate-float rounded-full border border-border/80 bg-gradient-panel px-7 py-4 shadow-ring backdrop-blur-xl sm:px-9 sm:py-5">
          <img
            src={trackoraLogo}
            alt="Trackora by DigiReps logo"
            className="h-auto w-[14rem] max-w-full sm:w-[18rem]"
            loading="eager"
          />
        </div>

        <div className="motion-safe-only animate-fade-up space-y-5">
          <p className="mx-auto inline-flex rounded-full border border-primary/15 bg-card/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-ring backdrop-blur">
            Field force management
          </p>
          <h1 className="text-balance text-6xl font-extrabold leading-none text-foreground sm:text-7xl md:text-8xl">Coming Soon</h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            A smarter way to track your team is on the way.
          </p>
        </div>

        <p className="motion-safe-only animate-fade-up rounded-full border border-border/70 bg-card/45 px-5 py-3 text-sm text-muted-foreground shadow-ring backdrop-blur [animation-delay:120ms] [animation-fill-mode:both]">
          A product by{" "}
          <a
            href="https://digireps.co/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
          >
            DigiReps
          </a>
        </p>
      </section>
    </main>
  );
};

export default Index;
