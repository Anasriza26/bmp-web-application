"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../common/header";
import Table from "../common/table";

type Booking = {
  date: string;
  status: "Paid" | "Refunded" | "Cancelled";
  customer: string;
  phone: string;
  timeSlot: string;
  amount: number;
};

const allBookings: Booking[] = [
  {
    date: "2022-01-06",
    status: "Paid",
    customer: "Olivia Rhye",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-06",
    status: "Paid",
    customer: "Phoenix Baker",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-06",
    status: "Paid",
    customer: "Lana Steiner",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-05",
    status: "Paid",
    customer: "Demi Wilkinson",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-05",
    status: "Refunded",
    customer: "Candice Wu",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-05",
    status: "Paid",
    customer: "Natali Craig",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-04",
    status: "Cancelled",
    customer: "Drew Cano",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
  {
    date: "2022-01-03",
    status: "Paid",
    customer: "Orlando Diggs",
    phone: "0774338424",
    timeSlot: "08:00 AM",
    amount: 3500,
  },
];

const headers = [
  { label: "Invoice", className: "w-[100px]" },
  { label: "Status" },
  { label: "Method" },
  { label: "Amount", className: "text-right" },
];

const rows = [
  [
    { value: "INV001", className: "font-medium" },
    { value: "Paid" },
    { value: "Credit Card" },
    { value: "$250.00", alignRight: true },
  ],
  [
    { value: "INV002", className: "font-medium" },
    { value: "Pending" },
    { value: "PayPal" },
    { value: "$150.00", alignRight: true },
  ],
];
const getStatusBadge = (status: string) => {
  switch (status) {
    case "Paid":
      return (
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
          ✓ Paid
        </span>
      );
    case "Refunded":
      return (
        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
          ↺ Refunded
        </span>
      );
    case "Cancelled":
      return (
        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
          ✗ Cancelled
        </span>
      );
    default:
      return null;
  }
};

const BookingsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredBookings = allBookings.filter((b) => {
    const matchesSearch =
      b.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "All" || b.status === statusFilter;
    const bookingDate = new Date(b.date);
    const inDateRange =
      (!startDate || bookingDate >= startDate) &&
      (!endDate || bookingDate <= endDate);
    return matchesSearch && matchesStatus && inDateRange;
  });

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const displayedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl p-4 md:p-6 mx-auto">
      <Header title="Manage Bookings" subtitle="Track, manage and forecast your bookings." />

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-4">
        <input
          type="text"
          placeholder="Search by name or phone"
          className="border rounded px-4 py-2 w-full lg:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            className="border rounded px-2 py-2 w-full sm:w-auto"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            className="border rounded px-2 py-2 w-full sm:w-auto"
          />
          <select
            className="border rounded px-4 py-2 w-full sm:w-auto"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Refunded">Refunded</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Time Slot</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {displayedBookings.map((b, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-3">
                  {new Date(b.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">{getStatusBadge(b.status)}</td>
                <td className="px-4 py-3">
                  <div>{b.customer}</div>
                  <div className="text-gray-500 text-xs">{b.phone}</div>
                </td>
                <td className="px-4 py-3">{b.timeSlot}</td>
                <td className="px-4 py-3">{b.amount.toFixed(2)}</td>
                <td className="px-4 py-3 text-blue-600 cursor-pointer">
                  Reschedule
                </td>
                <td className="px-4 py-3 text-red-500 cursor-pointer">
                  Cancel
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Table 
      caption="A list of your recent invoices."
      headers={headers}
      rows={rows}/>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <button
          className="text-sm border px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>
        <div className="flex flex-wrap gap-1 justify-center">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className={`text-sm px-3 py-1 rounded ${
                p === currentPage ? "bg-gray-800 text-white" : "border"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <button
          className="text-sm border px-4 py-2 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BookingsTable;
