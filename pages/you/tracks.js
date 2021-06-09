import Navbar from "../../components/navbar/Navbar";

export default function TracksPage() {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl font-display font-bold mt-6">
        Top Tracks
      </h1>

      <div class="container mx-auto pt-6">

        <div className="flex gap-8 mx-auto max-w-5xl">
          <div className="flex-1">
            <img className="rounded shadow" src="https://i.scdn.co/image/ab67616d0000b2731017779b8f5fe0ccd77bf886" />
            <div className="mt-2">
              <h2 className="text-lg font-bold font-display">Crosses</h2>
              <p>José González</p>
              <p className="text-gray-500">Veneer</p>
            </div>
          </div>

          <div className="flex-1">
            <img className="rounded shadow" src="https://i.scdn.co/image/ab67616d0000b273af149eb4002f65f83afc63c4" />
            <div className="mt-2">
              <h2 className="text-lg font-bold font-display mt">Who shot cupid?</h2>
              <p>Juice WRLD</p>
              <p className="text-gray-500">Death Race for Love</p>
            </div>
          </div>

          <div className="flex-1">
            <img className="rounded shadow" src="https://i.scdn.co/image/ab67616d0000b273aa7c328b5066085ccd4ddb76" />
            <div className="mt-2">
              <h2 className="text-lg font-bold font-display mt">Mountains</h2>
              <p>Message To Bears</p>
            </div>
          </div>

          <div className="flex-1">
            <img className="rounded shadow" src="https://i.scdn.co/image/ab67616d0000b273865c594e832d54eedf64c296" />
            <div className="mt-2">
              <h2 className="text-lg font-bold font-display mt">Flaws</h2>
              <p>Daughter</p>
            </div>
          </div>

          {/* <div class="flex-1 animate-pulse">
            <div class="bg-gray-400 rounded w-full h-32"></div>
            <div class="w-full mt-2">
              <div class="bg-gray-400 rounded w-full h-6"></div>
              <div class="bg-gray-400 rounded w-full h-4 mt-2"></div>
            </div>
          </div>

          <div class="flex-1 animate-pulse">
            <div class="bg-gray-400 rounded w-full h-32"></div>
            <div class="w-full mt-2">
              <div class="bg-gray-400 rounded w-full h-6"></div>
              <div class="bg-gray-400 rounded w-full h-4 mt-2"></div>
            </div>
          </div>

          <div class="flex-1 animate-pulse">
            <div class="bg-gray-400 rounded w-full h-32"></div>
            <div class="w-full mt-2">
              <div class="bg-gray-400 rounded w-full h-6"></div>
              <div class="bg-gray-400 rounded w-full h-4 mt-2"></div>
            </div>
          </div>

          <div class="flex-1 animate-pulse">
            <div class="bg-gray-400 rounded w-full h-32"></div>
            <div class="w-full mt-2">
              <div class="bg-gray-400 rounded w-full h-6"></div>
              <div class="bg-gray-400 rounded w-full h-4 mt-2"></div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}