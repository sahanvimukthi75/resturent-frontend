import React, { useEffect, useState } from "react";
import ListCard from "../layouts/ListCard";
import axios from "axios";

const List = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/restaurants')
      .then(result => setRestaurants(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Restaurant List
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {restaurants.map((restaurant) => (
          <ListCard
          key={restaurant._id} 
          id={restaurant._id}
            name={restaurant.name}
            phonenumber={restaurant.phoneNumber}
            address={restaurant.address}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
