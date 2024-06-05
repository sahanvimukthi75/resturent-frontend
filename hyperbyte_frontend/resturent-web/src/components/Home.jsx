import React from "react";
import Button1 from "../layouts/Button";
import background from "../assets/background3.jpg";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">World Wide Resturents</h1>
        <p className="text-backgroundColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          necessitatibus, beatae, vitae est quo voluptates laudantium iusto
          expedita incidunt minima unde reiciendis debitis architecto illo! Nisi
          placeat possimus odit harum!ggnnnng
        </p>
       
      </div>
    </div>
  );
};

export default Home;
