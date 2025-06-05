"use client";

import Header from "../common/header";
import React, { useState } from "react";
import Image from "next/image";
import UserImg from "@/components/assets/User.jpg"; // Assuming you're using Next.js for image handling

const ProfileEditor: React.FC = () => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("example@mail.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890"); // Changed to a typical phone number format
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null); // To store the URL of the uploaded image

  // Bank details state
  const [accountHolderName, setAccountHolderName] = useState("John Doe");
  const [nic, setNic] = useState("200112700021");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("Puttalam");
  const [branchCode, setBranchCode] = useState("XXXXXXXX"); // Assuming masked or placeholder
  const [bankAccountNumber, setBankAccountNumber] = useState("XXXXXXXX"); // Assuming masked or placeholder
  const [bankStatementFile, setBankStatementFile] = useState<File | null>(
    null
  );

  // Profile image upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // In a real application, you'd upload this file to a server and get a URL back.
      // For this example, we'll just use FileReader to display a preview.
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Bank statement upload
  const handleBankStatementFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      setBankStatementFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setBankStatementFile(event.dataTransfer.files[0]);
    }
  };

  const handleSavePersonalInfo = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send this data to your backend API
    console.log({
      firstName,
      lastName,
      email,
      phoneNumber,
      password, // In a real app, you'd hash this before sending
      confirmPassword,
      profileImage,
    });
    alert("Personal information saved (console for details)!");
    // Add logic for API calls, validation, etc.
  };

  const handleCancelPersonalInfo = () => {
    console.log("Personal info changes cancelled");
    // Add logic to revert changes or navigate away
  };

  const handleBankDetailsSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic to save bank details, e.g., send data to an API
    console.log({
      accountHolderName,
      nic,
      bankName,
      branchName,
      branchCode,
      bankAccountNumber,
      bankStatementFile,
    });
    alert("Bank details saved (check console for data)");
  };

  return (
    <>
      <div className="flex flex-col mx-4 my-4">
        {/* Header Component */}
        <Header
          title="Manage Profile"
          subtitle="Define when your facility is open for bookings and set your base pricing structure."
        />

        <div className="flex flex-col lg:flex-row bg-white min-h-screen p-8 rounded-lg shadow-md mt-4">
          {/* Sidebar for navigation */}
          <div className="lg:w-1/4 w-full bg-white p-6 shadow-md rounded-lg lg:mr-6 mb-6 lg:mb-0 h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Personal info
            </h2>
            <p className="text-sm text-gray-600">
              Update your photo and personal details.
            </p>
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Bank details
              </h2>
              <p className="text-sm text-gray-600">
                Update your bank account information to receive booking payments
                securely.
              </p>
            </div>
            {/* You can add more navigation links here if needed */}
          </div>

          {/* Main content area */}
          <div className="flex-1 w-full bg-white p-8 rounded-lg shadow-md">
            {/* Personal Information Form */}
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-4">
              Personal Information
            </h2>
            <form
              onSubmit={handleSavePersonalInfo}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="tel" // Use "tel" for better mobile keyboard experience
                    name="phoneNumber"
                    id="phoneNumber"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* Update Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Update Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 10h.01M17 10h.01"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Confirm New Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm New Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 10h.01M17 10h.01"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Re Enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Profile Picture Upload */}
              <div className="col-span-full flex flex-col md:flex-row items-center mt-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  {profileImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="h-20 w-20 rounded-full object-cover"
                      src={profileImage}
                      alt="Profile"
                    />
                  ) : (
                    <Image
                      className="h-20 w-20 rounded-full object-cover"
                      src={UserImg}
                      alt="Profile"
                      width={80} // Specify width for Next.js Image component
                      height={80} // Specify height for Next.js Image component
                    />
                  )}
                </div>
                <div className="flex-1 border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <div className="flex justify-center mb-2">
                    <svg
                      className="h-10 w-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                      ></path>
                    </svg>
                  </div>
                  <label
                    htmlFor="profile-file-upload" // Changed ID to avoid conflict
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    Click to upload
                    <input
                      id="profile-file-upload" // Changed ID
                      name="profile-file-upload" // Changed name
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept="image/svg+xml, image/png, image/jpeg, image/gif"
                    />
                  </label>
                  <span className="text-gray-600"> or drag and drop</span>
                  <p className="text-xs text-gray-500 mt-1">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="col-span-full flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={handleCancelPersonalInfo}
                  className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save Personal Info
                </button>
              </div>
            </form>

            <hr className="my-10 border-gray-200" /> {/* Separator */}

            {/* Bank Details Form */}
            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-4">
              Bank Details
            </h2>
            <form onSubmit={handleBankDetailsSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Account Holder's Name */}
                <div>
                  <label
                    htmlFor="accountHolderName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Account Holder's Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="accountHolderName"
                      id="accountHolderName"
                      className="block w-full rounded-md border-gray-300 pl-10 pr-2 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={accountHolderName}
                      onChange={(e) => setAccountHolderName(e.target.value)}
                    />
                  </div>
                </div>

                {/* NIC */}
                <div>
                  <label
                    htmlFor="nic"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    NIC
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="nic"
                      id="nic"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                      value={nic}
                      onChange={(e) => setNic(e.target.value)}
                    />
                  </div>
                </div>

                {/* Bank Name */}
                <div>
                  <label
                    htmlFor="bankName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bank Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6zm-1 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <select
                      id="bankName"
                      name="bankName"
                      className="block w-full rounded-md border-gray-300 pl-10 pr-2 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    >
                      <option value="">Select your bank</option>
                      {/* Add more bank options here */}
                      <option value="Bank of Ceylon">Bank of Ceylon</option>
                      <option value="Commercial Bank">Commercial Bank</option>
                      <option value="Hatton National Bank">
                        Hatton National Bank
                      </option>
                      <option value="Sampath Bank">Sampath Bank</option>
                    </select>
                  </div>
                </div>

                {/* Branch Name */}
                <div>
                  <label
                    htmlFor="branchName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Branch Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="branchName"
                      id="branchName"
                      className="block w-full rounded-md border-gray-300 pl-10 pr-2 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                    />
                  </div>
                </div>

                {/* Branch Code */}
                <div>
                  <label
                    htmlFor="branchCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Branch Code
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="branchCode"
                      id="branchCode"
                      className="block w-full rounded-md border-gray-300 pl-10 pr-2 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={branchCode}
                      onChange={(e) => setBranchCode(e.target.value)}
                    />
                  </div>
                </div>

                {/* Bank Account Number */}
                <div>
                  <label
                    htmlFor="bankAccountNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bank Account Number
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6zm-1 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="bankAccountNumber"
                      id="bankAccountNumber"
                      className="block w-full rounded-md border-gray-300 pl-10 pr-2 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={bankAccountNumber}
                      onChange={(e) => setBankAccountNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Bank Statement Upload */}
              <div className="mb-8">
                <label
                  htmlFor="bank-statement-upload" // Added ID
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Bank Statement
                </label>
                <div
                  className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="bank-statement-upload" // Ensured this matches the input ID
                        className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500"
                      >
                        <input
                          id="bank-statement-upload" // Unique ID
                          name="bank-statement-upload" // Unique name
                          type="file"
                          className="sr-only"
                          onChange={handleBankStatementFileChange}
                          accept="image/jpeg,image/png,image/jpg,application/pdf" // Added PDF as a common bank statement format
                        />
                        <span>Click to upload</span>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      {bankStatementFile
                        ? bankStatementFile.name
                        : "JPEG, PNG, JPG, PDF (max. 800x400px image)"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Bank Details */}
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => console.log("Bank details changes cancelled")}
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Save Bank Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEditor;