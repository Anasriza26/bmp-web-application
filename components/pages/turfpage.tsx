"use client";

import Header from "../common/header";
import React, { useState } from "react";
import {
  UserIcon,
  MapPinIcon,
  CloudArrowUpIcon,
  ArrowsRightLeftIcon,
  ArrowsUpDownIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline"; // Added relevant icons

interface GroundFormState {
  name: string;
  location: string;
  description: string;
  groundWidth: string;
  groundLength: string;
  amenities: string[]; // Or a more specific type if you have predefined amenities
  groundType: string;
  sports: string[]; // Or a more specific type if you have predefined sports
  // You'd also handle file uploads, but that's more complex
}

const Turfpage = () => {
  const [formData, setFormData] = useState<GroundFormState>({
    name: "Liverpool Ground", // Pre-filled based on your image
    location: "Melwatha", // Pre-filled based on your image
    description: "",
    groundWidth: "10m", // Pre-filled based on your image
    groundLength: "10m", // Pre-filled based on your image
    amenities: [],
    groundType: "",
    sports: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Special handling for amenities and sports if they were multi-selects,
    // but based on your current select, it's a single value.
    // If you intend for multiple selections, you'd need to adjust this.
    if (name === "amenities" || name === "sports") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: [value], // Store as an array with a single value
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    console.log("Saving form data:", formData);
    // Here you would typically send this data to an API
  };

  const handleCancel = () => {
    console.log("Form cancelled");
    // Here you might navigate back or reset the form
  };

  return (
    <>
      {/* Outer container for consistent centering and padding */}
      <div className="flex flex-col min-h-screen bg-gray-50 py-8">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Header
            title="Manage Turf"
            subtitle="Define when your facility is open for bookings and set your base pricing structure."
          />
        </div>

        {/* --- */}

        {/* Turf Info Section */}
        <div className="max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8 mt-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side: Turf Info Sidebar */}
            <div className="flex flex-col gap-2 flex-none w-full lg:w-1/4">
              <h5 className="font-semibold text-lg text-gray-900">
                Turf Info
              </h5>
              <p className="font-normal text-gray-600 text-sm">
                Update the basic details about your <br /> sports facility,
                including its name,
                <br /> location, and the types of sports <br /> supported.
              </p>
            </div>
            {/* Right Side: Form */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Liverpool Ground"
                    />
                  </div>
                </div>

                {/* Location Field */}
                <div>
                  <label
                    htmlFor="location"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Location
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPinIcon className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Melwatha"
                    />
                  </div>
                </div>
              </div>
              {/* Description Field */}
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter a description..."
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Ground Images Upload */}
                <div className="md:col-span-1">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Ground Images
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md h-40 items-center text-center">
                    <div className="space-y-1 text-center">
                      <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Click to upload</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            accept="image/jpeg,image/png,image/jpg"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        JPEG, PNG, JPG (max. 800x400px)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ground Width and Length */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="groundWidth"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Ground Width
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ArrowsRightLeftIcon className="h-5 w-5 text-gray-400" />
                      </span>
                      <input
                        type="text"
                        id="groundWidth"
                        name="groundWidth"
                        value={formData.groundWidth}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="10m"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="groundLength"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Ground Length
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <ArrowsUpDownIcon className="h-5 w-5 text-gray-400" />
                      </span>
                      <input
                        type="text"
                        id="groundLength"
                        name="groundLength"
                        value={formData.groundLength}
                        onChange={handleChange}
                        className="mt-1 block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="10m"
                      />
                    </div>
                  </div>

                  {/* Amenities Dropdown */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="amenities"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      Amenities
                    </label>
                    <select
                      id="amenities"
                      name="amenities"
                      value={formData.amenities[0] || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select Amenities</option>
                      <option value="parking">Parking</option>
                      <option value="changing-rooms">Changing Rooms</option>
                      <option value="restrooms">Restrooms</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Ground Type Dropdown */}
                <div>
                  <label
                    htmlFor="groundType"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Ground type
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <TrophyIcon className="h-5 w-5 text-gray-400" />
                    </span>
                    <select
                      id="groundType"
                      name="groundType"
                      value={formData.groundType}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-10 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select the type</option>
                      <option value="grass">Grass</option>
                      <option value="turf">Turf</option>
                      <option value="hard-court">Hard Court</option>
                    </select>
                  </div>
                </div>

                {/* Sports Dropdown */}
                <div>
                  <label
                    htmlFor="sports"
                    className="block text-gray-700 text-sm font-medium mb-2"
                  >
                    Sports
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <TrophyIcon className="h-5 w-5 text-gray-400" />
                    </span>
                    <select
                      id="sports"
                      name="sports"
                      value={formData.sports[0] || ""}
                      onChange={handleChange}
                      className="mt-1 block w-full pl-10 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="">Select the sports</option>
                      <option value="football">Football</option>
                      <option value="basketball">Basketball</option>
                      <option value="cricket">Cricket</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 mt-6">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        ---

        {/* Ownership/Business documents Section */}
        <div className="max-w-6xl mx-auto w-full p-4 sm:p-6 lg:p-8 mt-8 bg-white rounded-lg shadow-md">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="flex-none w-full lg:w-1/4 pr-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Ownership/Business documents
              </h2>
              <p className="text-gray-600 text-sm">
                Update your business registration details and ownership
                documentation for legal compliance.
              </p>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow">
              {/* NIC Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    NIC Front
                  </label>
                  <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center h-48 flex flex-col items-center justify-center">
                    <input
                      type="file"
                      className="hidden"
                      id="nic-front-upload"
                      accept="image/jpeg, image/png, image/jpg"
                    />
                    <label
                      htmlFor="nic-front-upload"
                      className="cursor-pointer text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mt-2 text-green-600 font-medium">
                        Click to upload
                      </p>
                      <p className="text-gray-500 text-sm">or drag and drop</p>
                    </label>
                    <p className="mt-2 text-gray-400 text-xs">
                      JPEG, PNG, JPG (max. 800x400px)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    NIC Back
                  </label>
                  <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center h-48 flex flex-col items-center justify-center">
                    <input
                      type="file"
                      className="hidden"
                      id="nic-back-upload"
                      accept="image/jpeg, image/png, image/jpg"
                    />
                    <label
                      htmlFor="nic-back-upload"
                      className="cursor-pointer text-gray-500 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="mt-2 text-green-600 font-medium">
                        Click to upload
                      </p>
                      <p className="text-gray-500 text-sm">or drag and drop</p>
                    </label>
                    <p className="mt-2 text-gray-400 text-xs">
                      JPEG, PNG, JPG (max. 800x400px)
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Registration Document Section */}
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Business Registration Document
                </label>
                <div className="border border-dashed border-gray-300 rounded-lg p-6 text-center h-48 flex flex-col items-center justify-center">
                  <input
                    type="file"
                    className="hidden"
                    id="business-doc-upload"
                    accept="image/jpeg, image/png, image/jpg"
                  />
                  <label
                    htmlFor="business-doc-upload"
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mt-2 text-green-600 font-medium">
                      Click to upload
                    </p>
                    <p className="text-gray-500 text-sm">or drag and drop</p>
                  </label>
                  <p className="mt-2 text-gray-400 text-xs">
                    JPEG, PNG, JPG (max. 800x400px)
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Turfpage;