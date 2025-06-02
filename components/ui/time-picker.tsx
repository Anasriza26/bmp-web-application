import React from 'react';

interface TimePickerProps {
  label?: string;
  onChange: (time: string) => void;
  defaultValue?: string | null;
}

export const TimePicker: React.FC<TimePickerProps> = ({ label, onChange, defaultValue }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-semibold">{label}</label>}
      <input
        type="time"
        defaultValue={defaultValue || ''}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded px-2 py-1"
      />
    </div>
  );
};
