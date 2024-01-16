"use client";
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
} from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Button from "@/components/Button";
import dayjs from "dayjs";

export default function Details() {
  const { setBreakfastOrderData } = useBreakfastOrder();
  const [selectedRoom, setSelectedRoom] = useState("");
  const [comments, setComments] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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
      const formattedDate = dayjs(date).format("DD-MM-YYYY");
      setSelectedDate(formattedDate);
      setBreakfastOrderData({ selectedDate: date });
    }
  };
  const handleTimeChange = (time) => {
    if (time) {
      const formattedTime = dayjs(time).format("HH:mm");
      setSelectedTime(formattedTime);
      setBreakfastOrderData({ selectedTime: time });
    }
  };

  const handleConfirm = () => {
    console.log("Room:", selectedRoom);
    console.log("Comments:", comments);
    console.log("Date:", selectedDate);
    console.log("Time:", selectedTime);
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              )}
            />
            <StaticTimePicker
              label="Static Time Picker"
              value={selectedTime}
              onChange={handleTimeChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              )}
              ampm={false}
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
