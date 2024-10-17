import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
const About = () => {
  const [userData, setUserData] = useState("");
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      data = await fetch("https://api.github.com/users/ypraveen760");
      user = await data.json();
      setUserData(user);
      console.log(user);
    } catch (error) {
      console.log("ERROR FETCHING DATA", error);
    }
  };
  if (userData.length === 0) {
    return <Shimmer />;
  }
  const { name, avatar_url, bio, login, email } = userData || {};
  return (
    <div className="max-w-80 p-5 m-auto bg-orange-50 *:my-2 ">
      <h1 className="text-lg font-semibold ">User:{loggedInUser}</h1>
      <img
        className="rounded-full w-72 border border-orange-400 my-3"
        src={avatar_url}
      ></img>
      <h2 className="text-lg font-semibold">
        Name: <span className="font-light">{name}</span>
      </h2>
      <h3 className="text-lg font-semibold">
        Username: <span className="font-light">{login}</span>
      </h3>
      <h4>
        <span className="text-lg font-semibold">Email: </span>
        {email || "Not Given"}
      </h4>
      <p>
        {" "}
        <span className="text-lg font-semibold">Bio: </span>
        {bio || "Not Given"}
      </p>
    </div>
  );
};
export default About;
