function ItemCards({ itemCard }) {
  const { name, description, imageId, price, ribbon } = itemCard;
  return (
    <div>
      <div className="pb-3">
        <div className="items-start flex justify-between">
          {/* <p className="">⏺️</p> */}
          <div className="[calc(100% - 144px)]">
            <div aria-hidden="true">
              <span className="text-sm">⏺</span>
              {ribbon?.text && (
                <span className="text-[.75rem] text-[#ee9c00] font-medium">
                  <span className="text-xs">⭐</span>
                  {ribbon.text}
                </span>
              )}
            </div>
            <div>
              <h3 className="mr-1 text-[1rem] text-[#3e4152] font-medium">
                {name}
              </h3>
            </div>
            <div>
              <span className="text-sm text-[#3e4152]">₹ {price / 100}</span>
            </div>
            <div className="w-full mt-3 text-[rgba(40,44,63,.45)] text-[.85rem] tracking-[-.3px]">
              {description}
            </div>
          </div>

          <div className="relative ml-4 min-w-[118px] h-[120px]">
            <div aria-hidden="true">
              <button className="w-[118px] h-24 object-cover rounded-md">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                  className="w-[118px] h-24 object-cover rounded-md"
                />
              </button>
            </div>

            <div className="absolute left-1/2 bottom-2">
              <div className="w-24 h-9 relative shadow-lg rounded -translate-x-1/2 text-[#60b246] cursor-pointer text-center text-sm font-semibold bg-white hover:shadow-slate-200">
                <div>ADD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 h-[.5px] my-5"></div>
    </div>
  );
}

export default ItemCards;
