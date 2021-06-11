export default function OtherLoadingCard() {
  return (
    <div className="animate-pulse">
      <div className="w-100 grid grid-cols-12">
        <div className="col-span-3">
          <div className="bg-gray-400 w-full h-full rounded-lg"></div>
        </div>
        <div className="px-4 pt-0 col-span-9 my-auto">
          <div className="bg-gray-400 rounded w-full h-5"></div>
          <div className="bg-gray-400 rounded w-full h-5 mt-2"></div>
          <div className="bg-gray-400 rounded w-full h-5 mt-2"></div>
        </div>
      </div>
    </div>
  );
}