import {useEffect,useState} from "react"
import Shimmer from "./Shimmer";
const About=()=>{
    const [userData,setUserData]=useState('');

    useEffect(()=>{
        getData();
    },[])
    const getData=async()=>{
        try{
         data=await fetch("https://api.github.com/users/hecktech")
        user=await data.json();
        setUserData(user)
        console.log(user)
    }catch(error){
        console.log("ERROR FETCHING DATA",error);
    }
       

    };
    if(userData.length===0){
        return<Shimmer/>
    }
    const {name,avatar_url,bio,login,email}=userData||{};
    return(
       
        <div>
           <img src={avatar_url}></img>
           <h2>Name:{name}</h2>
           <h3>Username:{login}</h3>
           <h4>Email:{email || "Not Given"}</h4>
           <p>bio:{bio|| "Not Given"}</p>
            
        </div>
    );
};
export default About;