"use client"
import { useState } from 'react';
import 'react-phone-number-input/style.css';
// import { useRouter } from 'next/navigation';


export default function PersonalDetails() {
  // const router = useRouter();


  const [formData, setFormData] = useState({
    email: '',
    nationalId: '',
    kra: ''
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
      // router/.push(`/verify?phone=${encodeURIComponent(formData.phone)}`);

    console.log(formData);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Personal Details</h1>
      <p className="text-gray-600 mb-8">We need a few more details about you.</p>

      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="mb-6">
                   <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>
                    <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">National ID number</label>
              <input
                type="text"
                name="nationalId"
                value={formData.nationalId}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>
                           <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-1">KRA pin</label>
              <input
                type="text"
                name="kra"
                value={formData.kra}
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