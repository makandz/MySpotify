export default function LoadingCard() {
  return (
    <div className="animate-pulse">
      <div
        className="bg-gray-400 rounded w-full h-full"
        style={{paddingBottom: "100%"}}
      ></div>
      <div className="w-full mt-2">
        <div className="bg-gray-400 rounded w-full h-6"></div>
        <div className="bg-gray-400 rounded w-full h-4 mt-2"></div>
      </div>
    </div>
  );
}