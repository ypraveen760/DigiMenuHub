import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL, CORS_PROXY } from "../utils/constans";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(CORS_PROXY + API_URL + resId);

    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const category =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center *:  *:mt-4 ">
      <h1 className="text-2xl font-semibold ">{name}</h1>
      <p className="text-lg font-medium">
        {cuisines.join(", ")},{costForTwoMessage}
      </p>
      <h2 className="font-semibold">Menu</h2>
      {category.map((category, index) => (
        <RestaurantCategory
          data={category.card?.card}
          key={category.card?.card.title}
          showItem={index === showIndex}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
