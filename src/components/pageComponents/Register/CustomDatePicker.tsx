import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Option {
  label: string;
  value: number;
}

const monthOptions: Option[] = [
  { label: "Tháng 1", value: 1 },
  { label: "Tháng 2", value: 2 },
  { label: "Tháng 3", value: 3 },
  { label: "Tháng 4", value: 4 },
  { label: "Tháng 5", value: 5 },
  { label: "Tháng 6", value: 6 },
  { label: "Tháng 7", value: 7 },
  { label: "Tháng 8", value: 8 },
  { label: "Tháng 9", value: 9 },
  { label: "Tháng 10", value: 10 },
  { label: "Tháng 11", value: 11 },
  { label: "Tháng 12", value: 12 },
];

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      const newDate = new Date(date);
      setSelectedDate(newDate);
    }
  };

  const dayOptions: JSX.Element[] = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(<option key={i} value={i}>{i}</option>);
  }

  const yearOptions: JSX.Element[] = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 100; i--) {
    yearOptions.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="h-14 w-full ">
      <select
        className="h-full w-64 bg-black text-white rounded border focus:border-2 focus:border-sky-500 border-slate-700"
        value={selectedDate?.getMonth() || ""}
        onChange={(e) => {
          const selectedMonth = parseInt(e.target.value);
          const newDate = new Date(selectedDate || undefined);
          newDate.setMonth(selectedMonth);
          handleDateChange(newDate);
        }}
      >
        {monthOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select
        className=" ml-7 h-full w-20 bg-black text-white rounded border focus:border-2 focus:border-sky-500 border-slate-700"
        value={selectedDate?.getDate() || ""}
        onChange={(e) => {
          const selectedDay = parseInt(e.target.value);
          const newDate = new Date(selectedDate || undefined);
          newDate.setDate(selectedDay);
          handleDateChange(newDate);
        }}
      >
        {dayOptions}
      </select>

      <select
        className="ml-7 h-full w-24 bg-black text-white  rounded border focus:border-2 focus:border-sky-500 border-slate-700"
        value={selectedDate?.getFullYear() || ""}
        onChange={(e) => {
          const selectedYear = parseInt(e.target.value);
          const newDate = new Date(selectedDate || undefined);
          newDate.setFullYear(selectedYear);
          handleDateChange(newDate);
        }}
      >
        {yearOptions}
      </select>
    </div>
  );
};

export default CustomDatePicker;