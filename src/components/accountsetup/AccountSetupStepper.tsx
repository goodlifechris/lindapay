'use client';

interface Props {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const steps = ['Account', 'Profile', 'Finish'];

export default function AccountSetupStepper({ currentStep, setCurrentStep }: Props) {
  return (
    <div >
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Setup your account</h2>
      <p className="text-gray-600 mb-8">Follow the steps below to setup your merchant account.</p>

      {/* Stepper */}
      <div className="flex w-full items-center justify-between mb-6">
        {steps.map((label, index) => {
          const isComplete = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div
              key={label}
              className={`flex items-center cursor-pointer ${index !== steps.length - 1 ? 'w-full' : 'w-auto'}`}
              onClick={() => setCurrentStep(index)}
            >
              {/* Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                    ${isComplete ? 'bg-[#E6A54A] text-white' :
                      isActive ? 'border-2 border-[#E6A54A] text-[#E6A54A] bg-[#E6A54A]' :
                      'border-2 border-gray-300 text-gray-400 bg-white'}
                  `}
                >
                  {isComplete ? '✓' : ''}
                </div>
              </div>

              {/* Line */}
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
    </div>
  );
}
