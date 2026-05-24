import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />

        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />

        <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="flex min-h-[82vh] flex-col items-center justify-center text-center">
          <p className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-blue-300 backdrop-blur-sm">
            Anime Inspired Football Jerseys
          </p>

          <h1 className="max-w-6xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
            Wear Your Nation.
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              Play With Shonen Energy.
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            Shonen Kits creates premium anime-inspired football jerseys for fans
            who live between stadium chants, national pride, and main-character
            matchday moments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#products">
              <Button>
                Shop Jerseys
              </Button>
            </a>

            <a href="#about">
              <Button variant="outline">
                Explore Brand
              </Button>
            </a>
          </div>

          <div className="mt-16 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <p className="text-2xl font-black text-white">
                Premium
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Sports fabric
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <p className="text-2xl font-black text-white">
                Anime
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Inspired graphics
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
              <p className="text-2xl font-black text-white">
                India
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Pan-India shipping
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}