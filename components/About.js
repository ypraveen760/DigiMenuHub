import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import { GITHUB_API, CORS_PROXY } from "../utils/constans";
const About = () => {
  // const [userData, setUserData] = useState("");
  // const { loggedInUser } = useContext(UserContext);

  // useEffect(() => {
  //   getData();
  // }, []);
  // const getData = async () => {
  //   try {
  //     data = await fetch(CORS_PROXY + GITHUB_API);
  //     user = await data.json();
  //     setUserData(user);
  //     console.log(user);
  //   } catch (error) {
  //     console.log("ERROR FETCHING DATA", error);
  //   }
  // };
  // if (userData.length === 0) {
  //   return <Shimmer />;
  // }
  // const { name, avatar_url, bio, login, email } = userData || {};
  return (
    <div className="max-w-80 p-5 m-auto bg-orange-50 *:my-2 ">
      <img
        className="rounded-full w-72 border border-orange-400 my-3"
        src="https://avatars.githubusercontent.com/u/32950689?v=4"
      ></img>
      <h2 className="text-lg font-semibold">
        Name: <span className="font-light">Praveen Yadav</span>
      </h2>
      <h3 className="text-lg font-semibold">
        Username: <span className="font-light">ypraveen760</span>
      </h3>
      <h4>
        <span className="text-lg font-semibold">Email: </span>
        ypraveen760@gmail.com
      </h4>
      <p>
        {" "}
        <span className="text-lg font-semibold">Bio: </span>
        Hi, I’m Praveen Yadav! I’m a front-end developer skilled in JavaScript,
        React, HTML, CSS, Tailwind CSS, Bootstrap, Material UI, React Router,
        and REST APIs.
      </p>
    </div>
  );
};
export default About;
