import React, { FC } from "react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs, { Dayjs } from "dayjs";

interface TimeSelectorProps {
  selectedTime: Dayjs | null;
  handleTimeChange: (time: Dayjs | null) => void;
  className?: string;
}

const TimeSelector: FC<TimeSelectorProps> = ({
  selectedTime,
  handleTimeChange,
}) => {
  return (
    <MobileTimePicker
      value={selectedTime}
      onChange={handleTimeChange}
      orientation="portrait"
      ampm={false}
      minTime={dayjs().startOf("day").hour(6).minute(30)}
      maxTime={dayjs().startOf("day").hour(11).minute(0)}
    />
  );
};

export default TimeSelector;
