import trackoraLogo from "@/assets/trackora-logo.png";

const Index = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-page px-6 py-10">
      <div className="pointer-events-none absolute left-1/2 top-[-10rem] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />

      <section className="z-10 flex w-full max-w-3xl flex-col items-center justify-center gap-10 text-center">
        <div className="motion-safe-only animate-float rounded-2xl border border-border/70 bg-card/80 px-6 py-4 shadow-soft backdrop-blur">
          <img
            src={trackoraLogo}
            alt="Trackora by DigiReps logo"
            className="h-auto w-[15rem] max-w-full sm:w-[19rem]"
            loading="eager"
          />
        </div>

        <div className="motion-safe-only animate-fade-up space-y-4">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">Coming Soon</h1>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
            A smarter way to track your team is on the way.
          </p>
        </div>

        <p className="motion-safe-only animate-fade-up text-sm text-muted-foreground [animation-delay:120ms] [animation-fill-mode:both]">
          A product by{" "}
          <a
            href="https://digireps.co/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
          >
            DigiReps
          </a>
        </p>
      </section>
    </main>
  );
};

export default Index;
