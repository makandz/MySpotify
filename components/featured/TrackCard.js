export default function TrackCard(props) {
  return (
    <>
      <img className="rounded-lg shadow-lg" src={props.songData.image} />
      <div className="mt-2">
        <h2 className="text-lg font-bold font-display truncate">{props.songData.name}</h2>
        <p className="truncate">{props.songData.artist}</p>
        <p className="text-gray-500 truncate">{props.songData.album}</p>
      </div>
    </>
  )
}