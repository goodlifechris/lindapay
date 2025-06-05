'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
export default function VerificationForm() {
    const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get('phone') || '+254717687837'; // Fallback for dev
  
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [timer, setTimer] = useState(90); // 1:30 in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
    setError(null);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d+$/.test(pasteData)) {
      const newCode = [...code];
      pasteData.split('').forEach((char, i) => {
        if (i < 6) newCode[i] = char;
      });
      setCode(newCode);
      inputsRef.current[Math.min(5, pasteData.length - 1)]?.focus();
    }
  };

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length !== 6) {
      setError('Please enter a 6-digit code');
      return;
    }

    setIsSubmitting(true);
    try {
      // API call to verify code
      const response = await fetch('/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          code: verificationCode
        }),
      });

      if (!response.ok) {
        throw new Error('Verification failed');
      }

      // Handle successful verification (redirect, etc.)
      console.log('Verification successful!');
      
    } catch (error) {
      console.error('Verification error:', error);
      setError('The verification code you have entered is invalid or has expired. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format timer as MM:SS
  const formattedTimer = `${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Verify your phone number</h1>
      <p className="text-gray-600 mb-6">
        We have sent a verification code to <span className="font-medium">{phone}</span>. 
        Enter the code below to verify your phone number
      </p>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-16 text-2xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E6A54A] focus:border-transparent"
              autoFocus={index === 0}
              disabled={isSubmitting}
            />
          ))}
        </div>

    
        <button
          type="submit"
          className="w-full bg-[#E6A54A] text-white py-3 px-4 rounded-md font-medium hover:bg-[#d8953a] transition-colors mb-4 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Verifying...' : 'Verify phone number'}
        </button>

        <div className="flex flex-col justify-between text-sm text-gray-600">
          <button
            type="button"
            className="text-[#E6A54A] hover:text-[#d8953a] font-medium"
            onClick={() => {
              // Handle update phone number
              router.push('/signup?updatePhone=true');
            }}
          >
            Update phone number
          </button>

          <div className="p-4 text-right">
            {timer > 0 ? (
              <span className='text-black text-right '>Resend code in: <span className='text-[#d8953a]'> {formattedTimer}</span></span>
            ) : (
              <button
                type="button"
                className="text-[#E6A54A] hover:text-[#d8953a] font-medium"
                onClick={async () => {
                  setTimer(90);
                  try {
                    await fetch('/api/resend-code', {
                      method: 'POST',
                      body: JSON.stringify({ phone }),
                    });
                  } catch (error) {
                    console.error('Failed to resend code:', error);
                  }
                }}
              >
                Resend verification code
              </button>
            )}
          </div>

          <div className='block'>
       {error && (
          <p className="text-red-500 text-sm mb-4 bg-red-100 p-4 rounded-md">
            {error}
          </p>
        )}
          </div>
       

        </div>
      </form>
    </div>
  );
}