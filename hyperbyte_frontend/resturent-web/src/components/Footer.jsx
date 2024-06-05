import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className=" flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Resturent Web</h1>
          <p className="text-sm">
           This is World Greatest Resturent 
          </p>
        </div>
        <div style={{ marginLeft: '-10rem' }}> 
          <h1 className="font-medium text-xl pb-4 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Home
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/list"
            >
              List
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/create"
            >
              Create
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/details"
            >
              Details
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              
            >
              Sahanvimu.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
             
            >
              078-8536412
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
             
            >
              social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          We Are Offering best
          <span className="text-brightColor"> Facilities</span> For You
          
        </p>
      </div>
    </div>
  );
};

export default Footer;
