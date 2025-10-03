export default function TrackCard(props) {
  return (
    <>
      <a href={props.songData.href}>
        <img
          className="rounded-lg shadow-lg hover:shadow-xl"
          src={props.songData.image}
          alt={`${props.songData.name}'s Spotify cover art`}
        />
      </a>
      <div className="mt-2">
        <h2
          className="text-lg font-bold font-display truncate"
          title={props.songData.name}
        >
          {props.songData.name}
        </h2>
        <p
          className="truncate"
          title={props.songData.artist}
        >
          {props.songData.artist}
        </p>
        <p
          className="text-gray-500 truncate"
          title={props.songData.album}
        >
          {props.songData.album}
        </p>
      </div>
    </>
  )
}