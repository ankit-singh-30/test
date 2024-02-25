function ShimmerUI() {
  const shimmerItems = Array.from({ length: 4 }, (_, index) => index); // Generating an array of 8 shimmer items
  return (
    <div className="mx-52">
      <div className="grid grid-flow-col gap-4 m-4">
        {shimmerItems.map((item, index) => (
          <div className="col-span-4" key={index}>
            <div className="h-[10px] mb-2 rounded-sm w-2/4 bg-gray-200"></div>
            <div className="bg-gray-200 h-52 w-2/ rounded-sm"></div>
            <div className="mt-4">
              <div className="h-[10px] rounded-sm w-2/4 bg-gray-200"></div>
              <div className="h-[10px] mt-2 rounded-sm w-2/6 bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-flow-col gap-4 m-4">
        {shimmerItems.map((item, index) => (
          <div className="col-span-4" key={index}>
            <div className="h-[10px] mb-2 rounded-sm w-2/4 bg-gray-200"></div>
            <div className="bg-gray-200 h-52 w-2/ rounded-sm"></div>
            <div className="mt-4">
              <div className="h-[10px] rounded-sm w-2/4 bg-gray-200"></div>
              <div className="h-[10px] mt-2 rounded-sm w-2/6 bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerUI;
