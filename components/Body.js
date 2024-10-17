import RestaurantCard from "../components/RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constans";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [searchValue, setSearchValue] = useState([" "]);
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    console.log(json);

    setListRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="border border-black m-5">
      <div className="search-bar">
        <input
          className="border border-black my-6 ml-6 rounded-sm placeholder:to-black"
          size="20"
          placeholdertext="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="bg-orange-400 text-cyan-50 px-3 ml-3 rounded-md"
          onClick={() => {
            const filterres = listRes.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
            setFilteredRes(filterres);
          }}
        >
          Search
        </button>
        <button
          className="bg-orange-400 text-cyan-50 px-3 mx-6 rounded-md "
          type="button"
          onClick={() => {
            const filterList = listRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRes(filterList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap ">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
