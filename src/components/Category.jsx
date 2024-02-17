import ItemCards from "./ItemCards";

function Category({ category }) {
  const { title, itemCards } = category;
  return (
    <div className="relative">
      <div className="relative mx-4 mb-16 mt-6">
        <button className="mb-6 w-full flex justify-between pr-4 text-[1.15rem]">
          <h3 className="text-[#3e4152] font-extrabold text-[1rem] inline-block">
            <span aria-hidden="true">
              {title} ({itemCards.length})
            </span>
          </h3>
        </button>

        <div>
          {itemCards.map((itemCard) => (
            <ItemCards
              key={itemCard.card?.info?.id}
              itemCard={itemCard.card?.info}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
