export default function OtherTrackCard(props) {
  return (
    <div className="w-100 grid grid-cols-12">
      <div className="col-span-3">
        <img src={props.songData.image} className="rounded-lg shadow-lg" />
      </div>
      <div className="px-4 pt-0 col-span-9 my-auto">
        <h2 className="font-display font-bold text-lg truncate">{props.songData.name}</h2>
        <p className="truncate">{props.songData.artist}</p>
        <p className="text-gray-500 truncate">{props.songData.album}</p>
      </div>
    </div>
  )
}