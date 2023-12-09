import React, { useEffect } from "react";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    axios.get("/api/v1").then((response) => console.log(response.data.success));
    console.log("here");
  }, []);
  return <>hOME</>;
};

export default Home;
