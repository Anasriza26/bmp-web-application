import React from "react";

export default function Header({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  if (title && subtitle) {
     const isAdmin = title.includes("Administrator");
    return (
      <header className="mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-2 sm:mb-0">
        {isAdmin ? (
          // Split and highlight the "Administrator" part
          <>
            Welcome back, <span className="text-green-600">Administrator</span>
          </>
        ) : (
          title
        )}
      </h1>
      {subtitle && (
        <p className="text-sm text-gray-500">{subtitle}</p>
      )}
    </header>
    );
  }
}
