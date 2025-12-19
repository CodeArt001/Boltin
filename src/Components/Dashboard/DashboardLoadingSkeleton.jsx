const DashboardLoadingSkeleton = () => {
  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* 1. Statistics Cards Skeleton */}
      <div className="flex gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-lg w-1/3 shadow-md animate-pulse"
          >
            <div className="h-4 bg-gray-700 rounded w-1/3 mb-4"></div>{" "}
            {/* Label */}
            <div className="h-8 bg-gray-600 rounded w-1/2"></div> {/* Value */}
          </div>
        ))}
      </div>

      {/* 2. Main Chart/Graph Skeleton */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8 shadow-md animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-1/4 mb-4"></div>{" "}
        {/* Chart Title */}
        <div className="h-64 bg-gray-700 rounded"></div> {/* Chart Area */}
      </div>

      {/* 3. Recent Activity/List Skeleton */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-1/5 mb-6"></div>{" "}
        {/* Activity Title */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0"
          >
            <div className="h-4 bg-gray-700 rounded w-1/6"></div> {/* Date */}
            <div className="h-4 bg-gray-600 rounded w-3/5"></div>{" "}
            {/* Description */}
            <div className="h-4 bg-gray-700 rounded w-1/12"></div>{" "}
            {/* Status */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLoadingSkeleton;
