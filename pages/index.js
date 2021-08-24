import 'tailwindcss/tailwind.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="text-center font-display mt-14">
        <h1 className="text-7xl font-extrabold">Your music <span className="text-green-900">speaks</span>.</h1>
      </div>

      <div className="mx-auto max-w-2xl w-100 text-center mt-3">
        <h2 className="text-xl">See which artists and tracks you've listened to the most within the past month, 
          six month, or even all-time in a single place.</h2>
      </div>

      <div className="text-center mt-5">
        <Link href="/auth" passHref>
          <a>
            <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
              Sign in via Spotify
            </button>
          </a>
        </Link>
      </div>
    </>
  );
}
