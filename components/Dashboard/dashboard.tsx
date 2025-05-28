"use client";

import React, { useState } from "react";
import { ArrowUpRight, Bell, Trash2, Pencil } from "lucide-react";
import Header from "../common/header";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEditingIndex, setIsEditingIndex] = useState<number | null>(null);

  const [bookings, setBookings] = useState<
    { date: Date; start: string; end: string }[]
  >([]);

  const [highlightedBookingIndex, setHighlightedBookingIndex] = useState<number | null>(null);

  const getWeekDates = (startDate: Date) => {
    const dates = [];
    const start = new Date(startDate);
    start.setDate(start.getDate() - start.getDay());
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const [weekDates, setWeekDates] = useState<Date[]>(getWeekDates(currentDate));

  const timeSlots = {
    morning: [
      "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM",
      "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    ],
    evening: [
      "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
      "10:00 PM", "11:00 PM", "12:00 AM", "1:00 AM", "2:00 AM",
    ],
  };

  const formatDateDisplay = (date: Date) => ({
    dayName: date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
    dateNum: date.getDate(),
  });

  const isToday = (date: Date) => date.toDateString() === new Date().toDateString();
  const isSelected = (date: Date) => selectedDate?.toDateString() === date.toDateString();

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setStartTime(null);
    setEndTime(null);
  };

  const handleTimeClick = (time: string) => {
    if (!startTime) {
      setStartTime(time);
      setEndTime(null);
    } else if (!endTime) {
      if (time === startTime) {
        setStartTime(null);
        setEndTime(null);
      } else {
        setEndTime(time);
      }
    } else {
      setStartTime(time);
      setEndTime(null);
    }
  };

  const isTimeSelected = (time: string) => {
    if (!startTime) return false;
    if (startTime && !endTime) return time === startTime;
    const allSlots = [...timeSlots.morning, ...timeSlots.evening];
    const startIdx = allSlots.indexOf(startTime);
    const endIdx = allSlots.indexOf(endTime);
    const timeIdx = allSlots.indexOf(time);
    if (startIdx === -1 || endIdx === -1 || timeIdx === -1) return false;
    const [from, to] = startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];
    return timeIdx >= from && timeIdx <= to;
  };

  const getTimeRange = () => {
    if (!startTime || !endTime) return null;
    const allSlots = [...timeSlots.morning, ...timeSlots.evening];
    const startIdx = allSlots.indexOf(startTime);
    const endIdx = allSlots.indexOf(endTime);
    const [from, to] = startIdx < endIdx ? [startIdx, endIdx] : [endIdx, startIdx];
    return {
      start: allSlots[from],
      end: allSlots[to],
    };
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
    setWeekDates(getWeekDates(newDate));
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    setWeekDates(getWeekDates(newDate));
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !startTime || !endTime) return;

    const timeRange = getTimeRange();
    if (!timeRange) return;

    if (isEditingIndex !== null) {
      const updated = [...bookings];
      updated[isEditingIndex] = {
        date: selectedDate,
        start: timeRange.start,
        end: timeRange.end,
      };
      setBookings(updated);
    } else {
      setBookings([
        ...bookings,
        {
          date: selectedDate,
          start: timeRange.start,
          end: timeRange.end,
        },
      ]);
    }

    setSelectedDate(null);
    setStartTime(null);
    setEndTime(null);
    setIsEditingIndex(null);
  };

  const handleDeleteBooking = (index: number) => {
    const updated = [...bookings];
    updated.splice(index, 1);
    setBookings(updated);
  };

  const handleEditBooking = (index: number) => {
    const booking = bookings[index];
    setSelectedDate(new Date(booking.date));
    setStartTime(booking.start);
    setEndTime(booking.end);
    setIsEditingIndex(index);
  };

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8 ml-0 sm:ml-6 pb-20">
      {/* Header */}
      <Header
        title="Welcome back, Administrator"
        subtitle="Manage your bookings and view your stats"
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
        {[{ label: "Total Bookings", value: bookings.length.toString() }, { label: "Total Earnings", value: "LKR 27,500" }, { label: "Wallet Balance", value: "LKR 35,500", isStatic: true }].map((card, i) => (
          <div key={i} className="flex-1 min-w-full sm:min-w-[313px] bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">{card.label}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mt-1">{card.value}</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>
            {!card.isStatic ? (
              <div className="flex items-center mt-4 text-sm text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                <span className="font-semibold">40%</span>
                <span className="text-gray-500 ml-1">vs last month</span>
              </div>
            ) : (
              <div className="flex items-center mt-4 text-sm text-gray-500">
                Last updated on August
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="mt-8 sm:mt-10">
        <h2 className="text-xl font-medium mb-4">Booking Calendar</h2>
        <div className="max-w-full lg:max-w-5xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md">
          {/* Week Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-0">This Week</h3>
            <div className="flex gap-2">
              <button onClick={goToPreviousWeek} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-semibold">&lt;</button>
              <button onClick={goToNextWeek} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700 font-semibold">&gt;</button>
            </div>
          </div>

          {/* Dates Row */}
          <div className="overflow-x-auto flex gap-2 sm:gap-4 mb-4 sm:mb-6 pb-2 custom-scrollbar">
            {weekDates.map((date, i) => {
              const { dayName, dateNum } = formatDateDisplay(date);
              const selected = isSelected(date);
              const today = isToday(date);
              return (
                <div
                  key={i}
                  onClick={() => handleDateClick(date)}
                  className={`min-w-[80px] sm:min-w-[100px] px-2 sm:px-4 py-3 rounded-lg text-center cursor-pointer transition-all ${
                    selected ? "bg-green-600 text-white shadow-md" : today ? "bg-green-100 text-green-700" : "bg-gray-50 hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="text-xs sm:text-sm font-medium">{today ? "TODAY" : dayName}</div>
                  <div className="text-lg sm:text-xl font-bold">{dateNum}</div>
                </div>
              );
            })}
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="space-y-4 sm:space-y-6">
              {["morning", "evening"].map((period) => (
                <div key={period}>
                  <h3 className="text-md sm:text-lg font-semibold mb-2 sm:mb-3 capitalize">{period} Slots</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                    {timeSlots[period as "morning" | "evening"].map((time, i) => (
                      <button
                        key={`${period}-${i}`}
                        onClick={() => handleTimeClick(time)}
                        className={`py-2 px-3 sm:px-4 rounded-md text-xs sm:text-sm font-medium transition-all ${
                          isTimeSelected(time)
                            ? "bg-green-600 text-white shadow-md"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Booking Summary */}
          {selectedDate && startTime && endTime && (
            <div className="mt-6 sm:mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold mb-2">{isEditingIndex !== null ? "Edit Booking" : "Your Booking"}</h3>
              <p className="text-sm sm:text-base text-gray-700">
                Date:{" "}
                <span className="font-medium">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
              <p className="text-sm sm:text-base text-gray-700 mt-1">
                Time:{" "}
                <span className="font-medium">
                  {getTimeRange()?.start} - {getTimeRange()?.end}
                </span>
              </p>
              <button
                onClick={handleConfirmBooking}
                className="mt-4 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 ease-in-out font-semibold"
              >
                {isEditingIndex !== null ? "Update Booking" : "Confirm Booking"}
              </button>
            </div>
          )}

          {startTime && (
            <button
              onClick={() => {
                setSelectedDate(null); // Clear selected date as well
                setStartTime(null);
                setEndTime(null);
                setIsEditingIndex(null);
              }}
              className="mt-4 text-sm text-red-500 underline hover:text-red-700"
            >
              Clear Time Selection
            </button>
          )}
        </div>
      </div>

      {/* Bookings Overview */}
      {bookings.length > 0 && (
        <div className="mt-8 sm:mt-10 max-w-full lg:max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Confirmed Bookings</h2>
          <div className="grid gap-3 sm:gap-4">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border rounded-lg p-3 sm:p-4 transition-all duration-200 ease-in-out ${
                  highlightedBookingIndex === index
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                <div
                  onClick={() => setHighlightedBookingIndex(index)}
                  className="cursor-pointer mb-2 sm:mb-0"
                >
                  <p className="font-medium text-sm sm:text-base">
                    {booking.date.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-xs sm:text-sm">Time: {booking.start} - {booking.end}</p>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <button onClick={() => handleEditBooking(index)} className={`${highlightedBookingIndex === index ? 'text-white hover:text-blue-200' : 'text-green-600 hover:text-blue-500'}`}>
                    <Pencil className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button onClick={() => handleDeleteBooking(index)} className={`${highlightedBookingIndex === index ? 'text-white hover:text-red-200' : 'text-green-600 hover:text-red-500'}`}>
                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default Dashboard;

