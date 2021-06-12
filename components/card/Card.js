export default function Card() {
  return (
    <div>
      <div className="shadow-xl">
        <img className="w-full rounded" src="https://i.scdn.co/image/ab67616d0000b273af149eb4002f65f83afc63c4" alt="Mountain" />
      </div>
      <div className="max-w-sm rounded shadow-xl p-4 bg-white mx-auto font-display relative">
        <h3 className="font-bold">Who shot cupid?</h3>
        <p className="text-sm text-gray-600">Juice WRLD</p>
      </div>
    </div>
  )
}