import RestaurantCard from "../components/RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react"


const Body=()=>{
   
    const [listRes,setListRes ]=useState(resList);
    return(
       
        <div className="body">
             <div className="search-bar">
                <input className="search" placeholder="Search"></input>
                <button className="filter-btn" type="button" onClick={()=>{
                   
                    const filterList=resList.filter(
                    (res)=>res.info.avgRating>4.2);
                    setListRes(filterList);
                   
                }}>Top rated </button>
             </div>
             <div className="res-container">
             
                {listRes.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}
              
             
             </div> 
        </div>
       
    )
};

export default Body;