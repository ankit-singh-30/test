function Offer({ offer }) {
  const { offersTag, logoBottom, header, couponCode, description } = offer;

  return (
    <div className="mr-3">
      <button className="border rounded-lg shadow-sm min-w-[200px] flex items-center p-2">
        <div className="flex" aria-hidden="true">
          {offersTag && (
            <p className="text-[#E46D47] font-semibold text-[.7rem] [writing-mode:vertical-lr] rotate-180 border-l-2 pl-1">
              Flat Deal
            </p>
          )}
          <div className="mt-1 mb-1 ml-2 flex flex-col justify-center self-stretch">
            <div className="flex items-center">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/${
                  logoBottom ? logoBottom : "Store_Assets/Icons/OfferIconCart"
                }`}
                className="w-5 h-5 mr-2"
                alt=""
              />
              <p className="text-sm font-semibold text-[#686b78]">{header}</p>
            </div>
            <div className="text-xs text-[#93959f] mt-1 font-semibold">
              <span>{couponCode}</span>
              <span> | {description}</span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Offer;
