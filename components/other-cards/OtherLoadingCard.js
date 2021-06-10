export default function OtherLoadingCard() {
  return (
    <div className="animate-pulse">
      <div class="w-100 grid grid-cols-12">
        <div className="col-span-3">
          <div className="bg-gray-400 h-24 w-full rounded-lg"></div>
        </div>
        <div className="p-4 pt-1 col-span-9 my-auto">
          <div className="bg-gray-400 rounded w-full h-6"></div>
          <div className="bg-gray-400 rounded w-full h-6 mt-2"></div>
          <div className="bg-gray-400 rounded w-full h-6 mt-2"></div>
        </div>
      </div>
    </div>
  );
}