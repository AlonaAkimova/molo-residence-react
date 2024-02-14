import React, { FC } from "react";
import { StaticTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

interface TimeSelectorProps {
  selectedTime: Dayjs | null;
  handleTimeChange: (time: Dayjs | null) => void;
}

const TimeSelector: FC<TimeSelectorProps> = ({
  selectedTime,
  handleTimeChange,
}) => {
  return (
    <StaticTimePicker
      value={selectedTime}
      onChange={handleTimeChange}
      orientation="landscape"
      ampm={false}
      minTime={dayjs().startOf("day").hour(6).minute(30)}
      maxTime={dayjs().startOf("day").hour(11).minute(0)}
    />
  );
};

export default TimeSelector;
