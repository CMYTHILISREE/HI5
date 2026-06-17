import heroVideo from "../assets/Untitled design (4).mp4";

export default function VideoShowcase() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1500px] px-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#7f1d1d_0%,_#ea580c_25%,_#16a34a_55%,_#2563eb_78%,_#581c87_100%)] p-4 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:p-7">
        <div className="pointer-events-none absolute -left-20 -top-20 h-52 w-52 rounded-full bg-yellow-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-60 w-60 rounded-full bg-blue-300/25 blur-3xl" />

        <div className="relative grid items-center gap-7 lg:grid-cols-[0.8fr_1.6fr]">
          <div className="px-2 py-4 text-white sm:px-4 lg:py-10">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-yellow-50 ring-1 ring-yellow-200/30">
              Product Preview
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              See HI5CART Products in Action
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Watch our smart home organizers and shelf collections with a clear real-product view before you shop.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-white/90">
              <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-yellow-200/30">Premium Look</span>
              <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-green-200/30">Space Saving</span>
              <span className="rounded-full bg-white/15 px-4 py-2 ring-1 ring-blue-200/30">Best Price</span>
            </div>
          </div>

          <div className="hidden sm:block relative min-h-[260px] overflow-hidden rounded-[1.5rem] bg-black shadow-2xl ring-1 ring-white/15 sm:min-h-[390px] lg:min-h-[500px]">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-full min-h-[260px] w-full object-cover sm:min-h-[390px] lg:min-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
