'use client';

import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import UploadDocuments from './UploadDocuments';

const steps = ['Account', 'Profile', 'Finish'];

export default function AccountSetupStepper() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg border border-gray-200 justify-center items-center  ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setup your account</h2>
      <p className="text-gray-600 mb-8">Follow the steps below to  setup your merchant account.</p>
      {/* Stepper */}
      <div className="flex w-full items-center justify-between mb-6">
        {steps.map((label, index) => {
          const isComplete = index < currentStep;
          const isActive = index === currentStep;

          return (
<div key={label} className={`flex items-center ${index !== steps.length - 1 ? 'w-full' : 'w-auto'}`}>
              {/* Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${isComplete ? 'bg-[#E6A54A] text-white' :
                      isActive ? 'border-2 border-[#E6A54A]  text-[#E6A54A] bg-[#E6A54A]' :
                      'border-2 border-gray-300 text-gray-400 bg-white'}
                  `}
                >
                  {isComplete ? '✓' : ''}
                </div>
              </div>

              {/* Line (only between steps) */}
              {index !== steps.length - 1 && (
                <div className="flex-1 h-1 mx-2 relative overflow-hidden">
                  <div className="w-full h-full bg-gray-300 rounded-full" />
                  <div
                    className="absolute top-0 left-0 h-full bg-[#E6A54A] rounded-full transition-all duration-500 ease-in-out"
                    style={{ width: currentStep > index ? '100%' : '0%' }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Step Content */}
     {currentStep === 0 && <PersonalDetails />}
     {currentStep === 1 && <BusinessDetails />}
     {currentStep === 2 && <UploadDocuments />}
     
   

      {/* Navigation */}
      <div className="mt-8 flex justify-between w-full max-w-4xl ">
        <button
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
