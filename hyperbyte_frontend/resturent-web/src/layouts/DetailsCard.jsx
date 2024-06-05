import React from "react";
import Button1 from "./Button";
import axios from "axios";
import Button2 from "./Button2";
import { useNavigate } from "react-router-dom";

const DetailsCard = ({ id, name, phonenumber, address, onDelete }) => {
    const navigate = useNavigate();

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/deleteRestaurant/${id}`)
      .then(res => {
        console.log(res);
        onDelete(id);
       
      })
      .catch(err => console.log(err));
  };

  const handleUpdate = () => {
    navigate(`/update/${id}`);
    console.log(id)
  };

  
  
  return (
    <div className="w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">Name: {name}</h3>
        <h3 className="font-semibold text-center text-xl pt-6">Phone Number: {phonenumber}</h3>
        <h3 className="font-semibold text-center text-xl pt-6">Address: {address}</h3>
        <div className="flex flex-row justify-center"></div>
        <div className="flex flex-row items-center justify-center gap-4">
        <Button2 title="Update" scrollTo="/update" onClick={handleUpdate} />
          <Button1 title="Delete" onClick={() => handleDelete(id)} />
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
