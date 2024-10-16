import { CDN_URL } from "../utils/constans";

const ItemList = ({ item }) => {
  return (
    <div>
      <ul>
        {item.map((item) => (
          <div key={item.card.info.id}>
            <div className=" flex justify-between text-lg font-medium my-2 ">
              <span>
                {item.card.info?.name} ₹
                {item.card.info?.price
                  ? item.card.info?.price / 100
                  : item.card.info?.defaultPrice / 100}
              </span>
              <span className="my-2"></span>
              <div>
                <img
                  className="w-20 min-w-20 "
                  src={CDN_URL + item.card.info?.imageId}
                ></img>
                <button className="px-2 bg-orange-400 text-orange-50 rounded-lg mt-1 text-sm">
                  Add +
                </button>
              </div>
            </div>

            <div className="border-b-2 px-0 border-orange-400 text-xs">
              <span>{item.card.info?.description}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
