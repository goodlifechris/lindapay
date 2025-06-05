"use client"
import { useState } from 'react';
import 'react-phone-number-input/style.css';


export default function BusinessDetails() {


  const [formData, setFormData] = useState({
    businessName: '',
    registrationStatus: '',
   
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission

    console.log(formData);
  };

  return (
    <div>
      <p className="text-2xl font-semibold text-gray-800 mb-2">Business Details</p>
      <p className="text-gray-600 mb-8">Add information about your business.</p>

      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="mb-6">
                   <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Business name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>
                    <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Registration status</label>
              <input
                type="text"
                name="registrationStatus"
                value={formData.registrationStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>

 
        </div>





        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#E6A54A] hover:bg-[#d8953a] text-white font-medium py-3 px-6 rounded-md transition duration-200 shadow-md hover:shadow-lg"
        >
          Continue
        </button>
      </form>

    </div>
  );
}