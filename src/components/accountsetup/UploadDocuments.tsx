import { useState, useRef, ChangeEvent } from 'react';
import { FiUpload, FiCheck, FiX } from 'react-icons/fi';

const UploadDocuments = () => {
  const [frontIdFile, setFrontIdFile] = useState<File | null>(null);
  const [backIdFile, setBackIdFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const frontInputRef = useRef<HTMLInputElement>(null);
  // const backInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, type: 'front' | 'back') => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Only JPG, JPEG, and PNG files are allowed');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    setUploadError(null);
    handleFileClick(type,file);
  };

  function handleFileClick(type: 'front' | 'back', file: File) {
    if (type === 'front') {
    setFrontIdFile(file)
    } else {
     setBackIdFile(file);
    }
  } 

  const removeFile = (type: 'front' | 'back') => {
    if (type === 'front') {
      setFrontIdFile(null);
    } else {
      setBackIdFile(null);
    }
    // Reset the input field
    if (type === 'front') {
      frontInputRef.current!.value = '';
    }
   
  };

  const handleSubmit = async () => {
    if (!frontIdFile) {
      setUploadError('Please upload the front of your National ID');
      return;
    }

    setIsUploading(true);
    try {
      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle successful upload here
      console.log('Files uploaded:', { frontIdFile, backIdFile });
    } catch (error) {
      console.error('Upload failed:', error);
      setUploadError('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Upload documents</h1>
      <p className="text-gray-600 mb-6">We need to collect a few documents for verification.</p>

      <section className="mb-8">
        <p className="text-lg font-semibold text-gray-800 mb-3">National ID (Front)</p>
        <p className="text-gray-600 mb-4">Upload a clear photo of the front section of your national ID</p>

        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors ${
            frontIdFile ? 'border-green-200 bg-green-50' : 'border-gray-300'
          }`}
          onClick={() => frontInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={frontInputRef}
            onChange={(e) => handleFileChange(e, 'front')}
            accept="image/jpeg, image/png, image/jpg"
            className="hidden"
          />

          {frontIdFile ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <FiCheck className="text-green-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium">{frontIdFile.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {(frontIdFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile('front');
                }}
                className="mt-3 text-red-500 hover:text-red-700 flex items-center text-sm"
              >
                <FiX className="mr-1" /> Remove
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <FiUpload className="text-blue-500 text-xl" />
              </div>
              <p className="text-gray-700 font-medium">Click to upload</p>
              <p className="text-sm text-gray-500 mt-1">or drag and drop</p>
              <p className="text-xs text-gray-400 mt-3">Max file size 5MB. PNG, JPG, JPEG formats</p>
            </div>
          )}
        </div>
      </section>

      {uploadError && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm flex items-center">
          <FiX className="mr-2" /> {uploadError}
        </div>
      )}

      <div className="pt-4 border-t border-gray-100">
        <button
          onClick={handleSubmit}
          disabled={isUploading || !frontIdFile}
          className={`w-full py-3 px-4 rounded-md text-white font-medium ${
            isUploading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed`}
        >
          {isUploading ? 'Uploading...' : 'Complete setup'}
        </button>
      </div>
    </div>
  );
};

export default UploadDocuments;