export default function ArtistCard(props) {
    return (
        <>
            <img className="rounded-lg shadow-lg" src={props.artistData.image} />
            <div className="mt-2">
                <h2 className="text-lg font-bold font-display truncate">{props.artistData.name}</h2>
                <p className="text-gray-500 truncate capitalize">{props.artistData.genre}</p>
            </div>
        </>
    )
}