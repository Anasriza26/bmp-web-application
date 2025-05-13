"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMapMarkerAlt,
  faCloudUploadAlt,
  faBasketballBall,
} from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  location: string;
  amenities: string;
  description: string;
  sports: string;
  groundType: string;
  groundWidth: string;
  groundLength: string;
  groundImages: File | null;
}

const amenitiesOptions = [
  "WiFi",
  "Parking",
  "Restrooms",
  "Lighting",
  "Locker Rooms",
  "Water Fountain",
];

const sportsOptions = [
  "Football",
  "Cricket",
  "Basketball",
  "Tennis",
  "Baseball",
  "Volleyball",
];

const groundTypeOptions = ["Grass", "Clay", "Artificial", "Turf", "Hardcourt"];

const List: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "Liverpool Ground",
    location: "Melwatha",
    amenities: "",
    description: "",
    sports: "",
    groundType: "",
    groundWidth: "10m",
    groundLength: "10m",
    groundImages: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, groundImages: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-4 space-y-6"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                id="name"
                type="text"
                placeholder="Liverpool Ground"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm text-gray-700 mb-1"
            >
              Location
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input
                id="location"
                type="text"
                placeholder="Melwatha"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="amenities"
              className="block text-sm text-gray-700 mb-1"
            >
              Amenities
            </label>
            <input
              list="amenities-list"
              id="amenities"
              placeholder="Select Amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 pl-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
            <datalist id="amenities-list">
              {amenitiesOptions.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 flex flex-col">
            <label
              htmlFor="description"
              className="block text-sm text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter a description..."
              value={formData.description}
              onChange={handleChange}
              className="flex-1 w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm text-gray-700 mb-1">
              Ground Images
            </label>
            <label
              htmlFor="upload"
              className="flex-1 cursor-pointer flex flex-col items-center justify-center border border-gray-300 rounded-md text-center p-4 text-gray-500 hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              <span className="mb-1 p-2 rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faCloudUploadAlt} />
              </span>
              <span className="text-green-600 font-semibold text-sm">
                Click to upload
              </span>
              <span className="text-gray-500 text-xs">or drag and drop</span>
              <span className="text-gray-500 text-xs mt-1">
                JPEG, PNG, JPG (max. 800×400px)
              </span>
              <input
                id="upload"
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-end">
          <div className="sm:col-span-2 relative">
            <label
              htmlFor="sports"
              className="block text-sm text-gray-700 mb-1"
            >
              Sports
            </label>
            <input
              list="sports-list"
              id="sports"
              placeholder="Select the sports"
              value={formData.sports}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
            <span className="absolute left-3 top-[38px] text-gray-400 pointer-events-none">
              <FontAwesomeIcon icon={faBasketballBall} />
            </span>
            <datalist id="sports-list">
              {sportsOptions.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
          <div className="sm:col-span-2 relative">
            <label
              htmlFor="groundType"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground type
            </label>
            <input
              list="ground-type-list"
              id="groundType"
              placeholder="Select the type"
              value={formData.groundType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
            />
            <span className="absolute left-3 top-[38px] text-gray-400 pointer-events-none">
              <FontAwesomeIcon icon={faBasketballBall} />
            </span>
            <datalist id="ground-type-list">
              {groundTypeOptions.map((item) => (
                <option key={item} value={item} />
              ))}
            </datalist>
          </div>
          <div className="relative">
            <label
              htmlFor="groundWidth"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground Width
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input
                id="groundWidth"
                type="text"
                value={formData.groundWidth}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
          <div className="relative">
            <label
              htmlFor="groundLength"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground Length
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <input
                id="groundLength"
                type="text"
                value={formData.groundLength}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="max-w-6xl mx-auto p-4 space-y-6 mt-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          <div className="relative">
            <button
              type="button"
              className="w-full border rounded-md py-2 text-btncolor border-btncolor "
            >
              Back
            </button>
          </div>
          <div>
            <div className="relative">
              {/* Placeholder for additional content or input */}
            </div>
          </div>
          <div>
            <Link href="/ownerdocumentation"> <button
              type="button"
              className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
            >
              Next
            </button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
