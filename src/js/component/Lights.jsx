import React from "react";
import { useState } from "react";

export const TrafficLight = () => {
  /* Green Light useState and Logic */
  const [lightGreen, setLightOnGreen] = useState(" ");
  let lightToggleGreen = () => {
    setLightOnYellow(" ");
    setLightOnRed(" ");
    if (lightGreen == " ") {
      setLightOnGreen("5px 5px 50px 10px white");
    } else setLightOnGreen(" ");
  };

  /* Yellow Light useState and Logic */
  const [lightYellow, setLightOnYellow] = useState(" ");
  let lightToggleYellow = () => {
    setLightOnGreen(" ");
    setLightOnRed(" ");
    if (lightYellow == " ") {
      setLightOnYellow("5px 5px 50px 10px white");
    } else setLightOnYellow(" ");
  };

  /* Red Light useState and Logic */
  const [lightRed, setLightOnRed] = useState(" ");
  let lightToggleRed = () => {
    setLightOnGreen(" ");
    setLightOnYellow(" ");
    if (lightRed == " ") {
      setLightOnRed("5px 5px 50px 10px white");
    } else setLightOnRed(" ");
  };

  /* Events */
  function handleClickGreen() {
    lightToggleGreen();
  }
  function handleClickYellow() {
    lightToggleYellow();
  }

  function handleClickRed() {
    lightToggleRed();
  }

  return (
    <div className="container pt-5 mt-5">
      <div className="row row-cols-md-1 justify-content-md-center">
        <div
          className="col-md-2 text-center align-content-center justify-content-center bg-dark"
          style={{ minHeight: 150 }}
        >
          <div
            className="bg-danger rounded-circle position-relative  ms-5"
            style={{
              height: 95,
              width: 95,
              boxShadow: lightRed,
            }}
            onClick={handleClickRed}
          ></div>
        </div>
      </div>
      <div className="row row-cols-md-1 justify-content-md-center">
        <div
          className="col-md-2 text-center align-content-center justify-content-center bg-dark"
          style={{ minHeight: 150 }}
        >
          <div
            className="bg-warning rounded-circle position-relative  ms-5"
            style={{
              height: 95,
              width: 95,
              boxShadow: lightYellow,
            }}
            onClick={handleClickYellow}
          ></div>
        </div>
      </div>
      <div className="row row-cols-md-1 justify-content-md-center">
        <div
          className="col-md-2 text-center align-content-center justify-content-center bg-dark"
          style={{ minHeight: 150 }}
        >
          <div
            className="bg-success rounded-circle position-relative  ms-5"
            style={{
              height: 95,
              width: 95,
              boxShadow: lightGreen,
            }}
            onClick={handleClickGreen}
          ></div>
        </div>
      </div>
    </div>
  );
};
