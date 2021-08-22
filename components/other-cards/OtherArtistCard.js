export default function OtherArtistCard(props) {
  return (
    <div className="w-100 grid grid-cols-12">
      <div className="col-span-2 sm:col-span-3">
        <a href={props.artistData.href}>
          <img
            src={props.artistData.image}
            className="rounded-lg shadow-lg hover:shadow-xl"
            alt={`${props.artistData.name}'s Spotify cover art`}
          />
        </a>
      </div>
      <div className="px-4 col-span-9 my-auto">
        <h2
          className="font-display font-bold text-lg truncate"
          title={props.artistData.name}
        >
          {props.artistData.name}
        </h2>
        <p
          className="text-gray-500 truncate capitalize"
          title={props.artistData.genre}
        >
          {props.artistData.genre}
        </p>
      </div>
    </div>
  )
}