'use client';

import { useState } from 'react';
import AccountSetupStepper from './AccountSetupStepper';
import PersonalDetails from './PersonalDetails';
import BusinessDetails from './BusinessDetails';
import UploadDocuments from './UploadDocuments';

export default function AccountSetupContainer() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg border border-gray-200 justify-center items-center ">
      {/* Stepper with props */}
      <AccountSetupStepper currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Step Content with control logic */}
      <div className="mt-6 max-w-lg mx-auto">
        {currentStep === 0 && <PersonalDetails setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <BusinessDetails setCurrentStep={setCurrentStep} />}
        {currentStep === 2 && <UploadDocuments />}
      </div>
    </div>
  );
}
