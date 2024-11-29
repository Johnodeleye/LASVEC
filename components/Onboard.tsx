

'use client';
import React, { useEffect, useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation'; // Import useRouter
import Skeleton from './Skeleton';
import { useSession } from 'next-auth/react';

interface ImageData {
  url: string;
  publicId: string;
}

const Onboarding: React.FC = () => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    state: '',
    lga: '',
    residentialAddress: '',
    nin: '',  // Added NIN
  });
  const [uploadedImages, setUploadedImages] = useState<Record<string, ImageData>>({
    nin: { url: '', publicId: '' },
    passport: { url: '', publicId: '' },
    validId: { url: '', publicId: '' },
    passportPhoto: { url: '', publicId: '' },
    birthCertificate: { url: '', publicId: '' },
    proofOfResidency: { url: '', publicId: '' }
  });
  const [result, setResult] = React.useState("");

  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  // Check if user is onboarded
  useEffect(() => {
    const checkUserOnboardingStatus = async () => {
        const response = await fetch('/api/admin/users');
        const result = await response.json();
      
        // If the user is already onboarded, redirect to the dashboard
        if (result.success && result.onboarded === true) {
          router.push('/dashboard');
        } else {
          setIsOnboarded(false);  // Proceed with the onboarding if not onboarded
        }
      };
    checkUserOnboardingStatus();
  }, [router]);

  // Handle input changes in form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle image upload and update the state for each document
  const handleImageUpload = (result: any, documentType: string) => {
    const { secure_url, public_id } = result.info;
    setUploadedImages(prevState => ({
      ...prevState,
      [documentType]: { url: secure_url, publicId: public_id }
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('Logging in....');

    const requestBody = { ...formData, uploadedImages };

    const response = await fetch('/api/onboarding', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
    setResult('Logged in Successfully');
      router.push('/dashboard');
    } else {
      console.error('Form submission failed');
    }
  };

  if (sessionStatus === "loading") {
    return <Skeleton />;
  }


  if (isOnboarded) {
    return <Skeleton/>
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">Complete Your Onboarding</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-lg font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* NIN */}
        <div>
          <label htmlFor="nin" className="block text-lg font-medium text-gray-700">NIN Number</label>
          <input
            type="text"
            id="nin"
            name="nin"
            value={formData.nin}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dateOfBirth" className="block text-lg font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* State */}
        <div>
          <label htmlFor="state" className="block text-lg font-medium text-gray-700">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* LGA */}
        <div>
          <label htmlFor="lga" className="block text-lg font-medium text-gray-700">LGA</label>
          <input
            type="text"
            id="lga"
            name="lga"
            value={formData.lga}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Residential Address */}
        <div>
          <label htmlFor="residentialAddress" className="block text-lg font-medium text-gray-700">Residential Address</label>
          <input
            type="text"
            id="residentialAddress"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Image Uploads Section */}
        <div className="space-y-4 mt-6">
          {/* NIN Upload */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">NIN</h3>
            <CldUploadButton
              uploadPreset="lasvec" // Replace with your Cloudinary upload preset
              onSuccess={(result) => handleImageUpload(result, 'nin')}
              className="border-dashed border-2 border-gray-400 p-4 rounded-md w-full"
            >
              <div>
                {uploadedImages.nin.url ? (
                  <img src={uploadedImages.nin.url} alt="NIN" className="h-48 w-48 object-cover rounded mx-auto" />
                ) : (
                  <p className="text-center text-gray-600">Click to upload NIN</p>
                )}
              </div>
            </CldUploadButton>
          </div>

          {/* Passport Upload */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Passport</h3>
            <CldUploadButton
              uploadPreset="lasvec"
              onSuccess={(result) => handleImageUpload(result, 'passport')}
              className="border-dashed border-2 border-gray-400 p-4 rounded-md w-full"
            >
              <div>
                {uploadedImages.passport.url ? (
                  <img src={uploadedImages.passport.url} alt="Passport" className="h-48 w-48 object-cover rounded mx-auto" />
                ) : (
                  <p className="text-center text-gray-600">Click to upload Passport</p>
                )}
              </div>
            </CldUploadButton>
          </div>

          {/* Birth Certificate Upload */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Birth Certificate</h3>
            <CldUploadButton
              uploadPreset="lasvec"
              onSuccess={(result) => handleImageUpload(result, 'birthCertificate')}
              className="border-dashed border-2 border-gray-400 p-4 rounded-md w-full"
            >
              <div>
                {uploadedImages.birthCertificate.url ? (
                  <img src={uploadedImages.birthCertificate.url} alt="Birth Certificate" className="h-48 w-48 object-cover rounded mx-auto" />
                ) : (
                  <p className="text-center text-gray-600">Click to upload Birth Certificate</p>
                )}
              </div>
            </CldUploadButton>
          </div>

          {/* Proof of Residency Upload */}
          <div>
            <h3 className="text-lg font-medium text-gray-700">Proof Of Residency</h3>
            <CldUploadButton
              uploadPreset="lasvec"
              onSuccess={(result) => handleImageUpload(result, 'proofOfResidency')}
              className="border-dashed border-2 border-gray-400 p-4 rounded-md w-full"
            >
              <div>
                {uploadedImages.proofOfResidency.url ? (
                  <img src={uploadedImages.proofOfResidency.url} alt="Proof of Residency" className="h-48 w-48 object-cover rounded mx-auto" />
                ) : (
                  <p className="text-center text-gray-600">Click to upload Proof Of Residency</p>
                )}
              </div>
            </CldUploadButton>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-xl rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {result ? result : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
