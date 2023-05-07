import { Manrope } from 'next/font/google';
import Image from 'next/image';

const manrope = Manrope({
  weight: '800',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main>
      <div className={`text-center my-32 `}>
        <h1
          className={`text-8xl font-extrabold ${manrope.className}`}
        >
          What{"'"}s playing?
        </h1>
        <h2 className="mt-8 text-3xl leading-10">
          Discover and share your top Spotify songs and artists
          <br /> with friends, all in one place.
        </h2>
        <button className="bg-green-500 hover:bg-green-600 rounded-xl text-black py-5 px-7 text-xl mt-6">
          Sign in with Spotify
        </button>
      </div>

      <div className="mt-36 grid grid-cols-2 gap-6 max-w-6xl m-auto items-center">
        <div>
          <h1 className={`font-bold text-4xl ${manrope.className}`}>
            Find the music and artists you listen to the most
          </h1>
          <h2 className="text-xl max-w-md mt-4">
            While being able to just filter within the last month, 6
            months, or all time.
          </h2>
        </div>
        <div>
          <Image
            src="/assets/img/homepage-art.png"
            alt="Album art covers for various music and artists (incl. Lil 
                Tjay, Juice WRLD, Itzy, The Kid Laroi, Tate McRae, Now Now, and 
                Olivia Rodrigo"
            width={600}
            height={600}
          />
        </div>
      </div>

      <div className="mt-36 grid grid-cols-2 gap-20 max-w-6xl m-auto items-center">
        <div>
          <Image
            src="/assets/img/homepage-browser.png"
            alt="Chrome browser tab with the link to mySpotify in the URL bar"
            width={600}
            height={600}
          />
        </div>
        <div>
          <h1 className="font-display font-bold text-4xl">
            It really is that easy to share with your friends
          </h1>
          <h2 className="text-xl max-w-md mt-4">
            With just one click you get a link that you can share with
            friends.
          </h2>
        </div>
      </div>
    </main>
  );
}
