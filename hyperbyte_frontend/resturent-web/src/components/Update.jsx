import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddRestaurantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    address: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/restaurants/${id}`)
        .then(result => {
          const restaurant = result.data;
          setFormData({
            name: restaurant.name,
            phoneNumber: restaurant.phoneNumber,
            address: restaurant.address
          });
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:3001/updateRestaurant/${id}`, formData)
        .then(res => {
          console.log('Updated:', res.data);
          navigate('/details');
        })
        .catch(err => console.log(err));
    } else {
      axios.post('http://localhost:3001/addRestaurant', formData)
        .then(res => {
          console.log('Added:', res.data);
          navigate('/details');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter restaurant name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter phone number"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter address"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className='px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full cursor-pointer'
          >
          {id ? 'Update Restaurant' : 'Add Restaurant'}
        </button>
      </div>
    </form>
  );
};

const Update = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-10">
      <div className="space-y-4 lg:pt-30">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          {window.location.pathname.includes('update') ? "Update Restaurant" : "Add Restaurant"}
        </h1>
        <AddRestaurantForm />
      </div>
    </div>
  );
};

export default Update;
