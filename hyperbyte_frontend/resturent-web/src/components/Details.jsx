import React, { useEffect, useState } from "react";
import DetailsCard from "../layouts/DetailsCard";
import axios from "axios";


const Details= () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/restaurants')
      .then(result => setRestaurants(result.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
      
        Restaurant Details
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {restaurants.map((restaurant) => (
          <DetailsCard
          
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

export default Details;
