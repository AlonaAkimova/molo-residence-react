"use client";
import React, { FC, useState, useRef } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import Button from "@/components/Button";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
interface DetailsProps {}
const Details: FC<DetailsProps> = () => {
  const { setBreakfastOrder, breakfastOrder, loading } =
    useBreakfastOrderContext();
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const commentsRef = useRef<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const router = useRouter();

  const handleRoomChange = (event: SelectChangeEvent<string>) => {
    setSelectedRoom(event.target.value);
    setBreakfastOrder((prevOrder) => ({
      ...prevOrder,
      selectedRoom: event.target.value,
    }));
  };

  const handleCommentsChange = (
    event: React.ChangeEvent<{ value: string }>
  ) => {
    commentsRef.current = event.target.value;
    setBreakfastOrder((prevOrder) => ({
      ...prevOrder,
      additionalComments: commentsRef.current,
    }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("DD-MM-YYYY");
      setBreakfastOrder((prevOrder) => ({
        ...prevOrder,
        selectedDate: formattedDate,
      }));
    }
  };

  const handleTimeChange = (time: Dayjs | null) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setBreakfastOrder((prevOrder) => ({
        ...prevOrder,
        selectedTime: formattedTime,
      }));
    }
  };

  const handleConfirm = () => {
    router.push("/summary-page");
  };

  return (
    <>
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Provide the details</h1>
          {loading ? (
            <div className="text-xl font-bold mb-6">Loading...</div>
          ) : (
            <>
              <FormControl required fullWidth>
                <InputLabel id="room-select-label">Room Number</InputLabel>
                <Select
                  data-testid="room-select-label"
                  required
                  labelId="room-select-label"
                  id="room-select"
                  value={selectedRoom}
                  label="Room Number"
                  onChange={handleRoomChange}
                >
                  <MenuItem value={1}>Room 1</MenuItem>
                  <MenuItem value={2}>Room 2</MenuItem>
                  <MenuItem value={3}>Room 3</MenuItem>
                </Select>
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disablePast
                  label="Select Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                <StaticTimePicker
                  value={selectedTime}
                  onChange={handleTimeChange}
                  orientation="landscape"
                  ampm={false}
                  minTime={dayjs().startOf("day").hour(6).minute(30)}
                  maxTime={dayjs().startOf("day").hour(11).minute(0)}
                />
              </LocalizationProvider>
              <p className="text-1xl font-bold mb-2">Additional comments</p>
              <TextField
                data-testid="comments"
                fullWidth
                id="comments"
                label="Comments"
                multiline
                rows={4}
                value={commentsRef.current}
                onChange={handleCommentsChange}
                variant="outlined"
                margin="normal"
              />
              <Button onClick={handleConfirm}>Confirm</Button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
