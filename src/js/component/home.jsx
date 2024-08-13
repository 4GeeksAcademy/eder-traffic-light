import React from "react";
import { TrafficLight } from "./Lights";

//include images into your bundle
/* import rigoImage from "../../img/rigo-baby.jpg"; */

//create your first component
const Home = () => {
  return (
    <section className="min-vh-100">
      <TrafficLight />
    </section>
  );
};

export default Home;
