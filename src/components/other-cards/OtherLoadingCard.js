export default function OtherLoadingCard() {
  return (
    <div className="animate-pulse">
      <div className="w-full grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <div className="bg-gray-400 w-full aspect-square rounded-lg" />
        </div>
        <div className="px-4 pt-0 col-span-9 my-auto min-w-0">
          <div className="bg-gray-400 rounded w-full h-5" />
          <div className="bg-gray-400 rounded w-full h-5 mt-2" />
          <div className="bg-gray-400 rounded w-full h-5 mt-2" />
        </div>
      </div>
    </div>
  );
}
