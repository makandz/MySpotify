export default function OtherTrackCard(props) {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-2 sm:col-span-3">
        <a href={props.songData.href}>
          <img
            src={props.songData.image}
            className="rounded-lg shadow-lg hover:shadow-xl"
            alt={`${props.songData.name}'s Spotify cover art`}
          />
        </a>
      </div>
      <div className="px-4 pt-0 col-span-10 sm:col-span-9 my-auto min-w-0">
        <h2
          className="font-display font-bold text-lg truncate"
          title={props.songData.name}
        >
          {props.rank ? `${props.rank}. ` : null}
          {props.songData.name}
        </h2>
        <p className="truncate" title={props.songData.artist}>
          {props.songData.artist}
        </p>
        <p className="text-gray-500 truncate" title={props.songData.album}>
          {props.songData.album}
        </p>
      </div>
    </div>
  );
}
