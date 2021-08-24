export default function ArtistCard(props) {
  return (
    <>
      <a href={props.artistData.href}>
        <img
          className="rounded-lg shadow-lg hover:shadow-xl"
          src={props.artistData.image}
          alt={`${props.artistData.name}'s Spotify cover art`}
        />
      </a>
      <div className="mt-2">
        <h2
          className="text-lg font-bold font-display truncate"
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
    </>
  )
}