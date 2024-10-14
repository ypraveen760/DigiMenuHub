import RestaurantCard from "../components/RestaurantCard";
// import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [searchValue, setSearchValue] = useState([' ']);
  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4563596&lng=72.79246119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setListRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
    if (listRes.length === 0){return <Shimmer />}
     
 

  return (
    <div className="body">
      <div className="search-bar">
        <input
          className="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
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
          className="filter-btn"
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

      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id} to ={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
