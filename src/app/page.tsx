import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative">
        {/* light decorative background */}
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),rgba(255,255,255,0)_60%)]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center pt-16 sm:pt-20">
            <h1 className="font-display font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl">
              What have you been{" "}
              <span className="text-emerald-600">listening</span> to?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl text-gray-600">
              See and share your top Spotify artists and tracks. Filter by last
              month, six months, or all time.
            </p>

            <div className="mx-auto mt-8 flex items-center justify-center gap-4">
              <Link
                href="/auth"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Sign in with Spotify
              </Link>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              No data is saved or shared without your permission.
            </div>

            <div className="mx-auto mt-10 w-full max-w-md">
              <hr className="border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 md:mt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Find the music and artists you play the most
            </h2>
            <p className="mt-4 max-w-prose text-lg text-gray-600">
              Your top lists update automatically. Quickly switch time ranges to
              see what changed and what stuck around.
            </p>
          </div>

          {/* Image block */}
          <div className="overflow-hidden">
            <img
              src="/assets/homepage-art.png"
              alt="Album artwork grid"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-20 md:mt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image block */}
          <div className="order-last md:order-first overflow-hidden">
            <img
              src="/assets/homepage-browser.png"
              alt="Shareable profile link in a browser"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text block */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Share with friends in one click
            </h2>
            <p className="mt-4 max-w-prose text-lg text-gray-600">
              Generate a clean link to your profile and post it anywhere. No
              setup, no fuss.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-24 md:mt-32 mb-16 text-center">
        <h3 className="font-display text-4xl sm:text-5xl font-extrabold">
          Ready to see your Spotify stats?
        </h3>
        <p className="mt-3 text-lg text-gray-600">
          Sign in takes just a few seconds, and your data always stays private.
        </p>
        <div className="mt-8">
          <Link
            href="/auth"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Get started
          </Link>
        </div>
      </section>
    </main>
  );
}
