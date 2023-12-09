import React, { useEffect } from "react";
import axios from "axios";
const Home = () => {
  useEffect(() => {
    axios
      .get("https://imran-react.vercel.app/api/v1")
      .then((response) => console.log(response.data.success))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <>hOME</>;
};

export default Home;
