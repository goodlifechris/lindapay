import { useState } from 'react';
import Link from 'next/link';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import flags from 'react-phone-number-input/flags';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+254',
    password: '',
    agreedToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  type E164Number = string;

const handlePhoneChange = (value?: E164Number) => {
  setFormData(prev => ({
    ...prev,
    phone: value?.toString() || ''
  }));
};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg border border-gray-200 justify-center items-center  ">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to LindaPay</h1>
      <p className="text-gray-600 mb-8">Complete the form below to get started with LipaPay</p>

      <form onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Phone Number */}
            <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Phone number
        </label>
        <div className="border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#E6A54A]">
          <PhoneInput
            international
            defaultCountry="KE"
            value={formData.phone}
          
            
            onChange={handlePhoneChange}
            className="focus:border-0 focus:outline-none w-full px-4 py-2"
            flagComponent={({ country }) => {
              const Flag = flags[country];
              return Flag ? (
                <span className="w-6 h-4 inline-block mr-2  focus:outline-none">
                  <Flag title={country} />
                </span>
              ) : null;
            }}
          />
        </div>
      </div>

        {/* Password Section */}
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent focus:outline-none"
              required
              minLength={8}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            />
            <p className="mt-1 text-xs text-gray-500">
              Your password should be at least 8 characters with a number and letter
            </p>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="mb-6">
<label className="flex items-start">
  <input
    type="checkbox"
    name="agreedToTerms"
    checked={formData.agreedToTerms}
    onChange={handleChange}
      className="mt-1 mr-2 h-4 w-4 rounded appearance-none border-gray-300 text-red-500 focus:ring-red-500 checked:bg-red-500 checked:border-transparent"
    // className="mt-1 mr-2 h-4 w-4 rounded border-gray-300 text-[#E6A54A] focus:ring-[#E6A54A] checked:bg-[#E6A54A] checked:border-transparent"
    required
  />
  <span className="text-sm text-gray-700">
    I agree to the LindaPay{' '}
    <Link href="/terms" className="text-[#E6A54A] hover:underline">
      Terms of Service
    </Link>{' '}
    and{' '}
    <Link href="/privacy" className="text-[#E6A54A] hover:underline">
      Privacy Policy
    </Link>
  </span>
</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#E6A54A] hover:bg-[#d8953a] text-white font-medium py-3 px-6 rounded-md transition duration-200 shadow-md hover:shadow-lg"
        >
          Continue
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Read our{' '}
        <Link href="/terms" className="text-[#E6A54A] hover:underline">
          Terms of use
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="text-[#E6A54A] hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}