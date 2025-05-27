import React from "react";

export default function Header({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  if (title && subtitle) {
    return (
      <div className="mt-4 sm:mt-10 mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2 sm:mb-0">
            {/* Welcome back, <span className="text-green-600">Administrator</span> */}
            {title}
          </h1>
          {/* <button className="w-10 h-10 sm:w-[43px] sm:h-[43px] border border-gray-200 rounded-xl flex items-center justify-center shadow-sm">
          <Bell className="text-green-600 w-5 h-5" />
        </button> */}
        </div>
        <p className="text-sm sm:text-base text-gray-500 mt-2">{subtitle}</p>
      </div>
    );
  }
}
