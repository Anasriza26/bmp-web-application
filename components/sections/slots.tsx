'use client';

import React, { useState } from 'react';
import Header from '@/components/common/header';
import { Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { TimePicker } from '@/components/ui/time-picker';

interface TimeRange {
  startTime: string;
  endTime: string;
}

const Slots = () => {
  const [currentTimeRange, setCurrentTimeRange] = useState<Partial<TimeRange>>({
    startTime: '',
    endTime: '',
  });

  const [timeSlots, setTimeSlots] = useState<TimeRange[]>([]);
  const [openStartPicker, setOpenStartPicker] = useState(false);
  const [openEndPicker, setOpenEndPicker] = useState(false);

  const handleAdd = () => {
    const { startTime, endTime } = currentTimeRange;

    if (startTime && endTime) {
      if (startTime >= endTime) {
        alert('End time must be after start time.');
        return;
      }

      setTimeSlots([...timeSlots, { startTime, endTime }]);
      setCurrentTimeRange({ startTime: '', endTime: '' });
    } else {
      alert('Please select both start and end times.');
    }
  };

  const handleDelete = (index: number) => {
    setTimeSlots((prev) => prev.filter((_, i) => i !== index));
  };

  const handleTimeChange = (key: 'startTime' | 'endTime', value: string) => {
    setCurrentTimeRange((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col mx-4 my-4">
      <Header
        title="Manage Time Slots"
        subtitle="Define when your facility is open for bookings and set your base pricing structure."
      />

      <div className="flex flex-row items-center gap-4 mt-6">
        {/* Start Time Picker */}
        <Popover open={openStartPicker} onOpenChange={setOpenStartPicker}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 min-w-[120px]"
            >
              <Clock className="w-4 h-4" />
              {currentTimeRange.startTime || 'Start Time'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2">
            <TimePicker
              label="Start Time"
              onChange={(time) => handleTimeChange('startTime', time)}
              defaultValue={currentTimeRange.startTime || ''}
            />
          </PopoverContent>
        </Popover>

        {/* End Time Picker */}
        <Popover open={openEndPicker} onOpenChange={setOpenEndPicker}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 min-w-[120px]"
            >
              <Clock className="w-4 h-4" />
              {currentTimeRange.endTime || 'End Time'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-2">
            <TimePicker
              label="End Time"
              onChange={(time) => handleTimeChange('endTime', time)}
              defaultValue={currentTimeRange.endTime || ''}
              step={60}
            />
          </PopoverContent>
        </Popover>

        {/* Add Button */}
        <Button
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          Add
        </Button>
      </div>

      {/* Display added time slots */}
      {timeSlots.length > 0 && (
        <div className="mt-6 space-y-2">
          {timeSlots.map((slot, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-md shadow-sm bg-gray-50"
            >
              <span className="text-sm font-medium text-gray-700">
                {slot.startTime} - {slot.endTime}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(index)}
              >
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slots;
