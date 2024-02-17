function ShimmerUI() {
  const shimmerItems = Array.from({ length: 8 }, (_, index) => index); // Generating an array of 8 shimmer items
  return (
    <div className="flex p-8">
      <div className="flex">
        {shimmerItems.map((item) => (
          <div
            className="bg-gray-200 rounded-lg w-[16.5rem] shadow ml-4 grid-flow-col"
            key={item}
          >
            <div className="w-full h-52 rounded-lg bg-gray-300"></div>
            <div className="mt-4">
              <div className="h-5 w-3/4 mb-2 bg-gray-300"></div>
              <div className="h-4 w-1/2 mb-2 bg-gray-300"></div>
              <div className="h-4 w-1/2 mb-2 bg-gray-300"></div>
              <div className="h-8 w-32 bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShimmerUI;
