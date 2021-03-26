import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import Slogan from "../components/Slogan/slogan";
import PostContainer from "../components/PostContainer";
// import ClockApp from "../components/Clock/clock";
import ClockApp from "../components/Clock/Clock2";

const Home = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, [userData.user, history]);
  return (
    <div>
      <ClockApp />
      <Slogan />
      <PostContainer />
    </div>
  );
};

export default Home;
