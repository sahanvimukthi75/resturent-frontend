import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import Button1 from "./Button";

const ListCard = (props) => {
  return (
    <div className="w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg]">
      
      <div className="space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">Name :{props.name}</h3>
        <h3 className=" font-semibold text-center text-xl pt-6">Phone Number:{props.phonenumber}</h3>
        <h3 className=" font-semibold text-center text-xl pt-6"> Address:{props.address}</h3>
        <div className="flex flex-row justify-center">
          
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          
          
        </div>
      </div>
    </div>
  );
};

export default ListCard;
