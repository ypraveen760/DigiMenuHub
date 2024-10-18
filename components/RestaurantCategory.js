import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
    // setShowItem(!showItem);
  };
  return (
    <div>
      <div className="bg-orange-50 p-3 w-8/12 m-auto border rounded-md shadow-xl min-w-[300px] ">
        <div
          className="flex justify-between cursor-pointer "
          onClick={handleClick}
        >
          <span className="text-lg font-bold  ">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        <div className="my-1">
          {showItem && <ItemList item={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
