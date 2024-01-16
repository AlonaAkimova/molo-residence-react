"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useBreakfastOrder } from "@/store/BreakfastOrderProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DatePicker,
  StaticTimePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import Button from "@/components/Button";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function Details() {
  const { setBreakfastOrderData } = useBreakfastOrder();
  const [selectedRoom, setSelectedRoom] = useState("");
  const [comments, setComments] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const router = useRouter();

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
    setBreakfastOrderData({ selectedRoomNumber: selectedRoom });
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
    setBreakfastOrderData({ additionalComments: comments });
  };

  const handleDateChange = (date) => {
    if (date) {
      setSelectedDate(date);
      setBreakfastOrderData({ selectedDate: date });
    }
  };
  const handleTimeChange = (time) => {
    if (time) {
      setSelectedTime(time);
      setBreakfastOrderData({ selectedTime: time });
    }
  };

  const handleConfirm = () => {
    const formattedDate = selectedDate
      ? dayjs(selectedDate).format("DD-MM-YYYY")
      : "";
    const formattedTime = selectedTime
      ? dayjs(selectedTime).format("HH:mm")
      : "";
    setBreakfastOrderData({
      selectedRoomNumber: selectedRoom,
      additionalComments: comments,
      selectedDate: formattedDate,
      selectedTime: formattedTime,
    });
    console.log(
      "Room:",
      selectedRoom,
      "Comments:",
      comments,
      "Date:",
      formattedDate,
      "Time:",
      formattedTime
    );

    router.push("/summary-page");
  };

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Provide the details</h1>

          <FormControl fullWidth>
            <InputLabel id="room-select-label">Room Number</InputLabel>
            <Select
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
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              TextFieldComponent={TextField}
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <StaticTimePicker
              label="Static Time Picker"
              required
              value={selectedTime}
              onChange={handleTimeChange}
              TextFieldComponent={TextField}
              orientation="landscape"
              fullWidth
              variant="outlined"
              margin="normal"
              ampm={false}
              minTime={dayjs().startOf("day").hour(6).minute(0)}
              maxTime={dayjs().startOf("day").hour(11).minute(30)}
            />
          </LocalizationProvider>
          <p className="text-1xl font-bold mb-2">Additional comments</p>
          <TextField
            fullWidth
            id="comments"
            label="Comments"
            multiline
            rows={4}
            value={comments}
            onChange={handleCommentsChange}
            variant="outlined"
            margin="normal"
          />
          <Button onClick={handleConfirm}>Confirm</Button>
        </div>
      </div>
    </>
  );
}
