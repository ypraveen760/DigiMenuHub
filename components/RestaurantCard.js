import { CDN_URL } from "../utils/constans";
const RestaurantCard=(props)=>{
    const{resData}=props;
    const{cloudinaryImageId,name,cuisines,areaName,avgRating}= resData?.info;
        return(
            <div className="res-card">
                <img className="foodimage"src={CDN_URL+cloudinaryImageId} alt="food image">
                </img>

                <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4> {areaName} </h4>
               <h4> {avgRating} Stars</h4>
               <h4> {resData.info.sla.deliveryTime} mins</h4>
              

            </div>
        )
};

export default RestaurantCard;