import React, { FC } from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DateSelectorProps {
  selectedDate: Dayjs | null;
  handleDateChange: (date: Dayjs | null) => void;
}

const DateSelector: FC<DateSelectorProps> = ({
  selectedDate,
  handleDateChange,
}) => {
  return (
    <MobileDatePicker
      disablePast
      label="Select Date"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
};

export default DateSelector;
