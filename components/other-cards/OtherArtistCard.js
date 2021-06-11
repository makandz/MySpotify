export default function OtherArtistCard(props) {
  return (
    <div className="w-100 grid grid-cols-12">
      <div className="col-span-3">
        <img src={props.artistData.image} className="rounded-lg shadow-lg" />
      </div>
      <div className="px-4 col-span-9 my-auto">
        <h2 className="font-display font-bold text-lg truncate">{props.artistData.name}</h2>
        <p className="text-gray-500 truncate capitalize">{props.artistData.genre}</p>
      </div>
    </div>
  )
}