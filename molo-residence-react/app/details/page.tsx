"use client";
import React, { FC, useState, useRef, useCallback, Suspense } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const RoomSelect = React.lazy(() => import("@/components/RoomSelect"));
const DateSelector = React.lazy(() => import("@/components/DateSelect"));
const TimeSelector = React.lazy(() => import("@/components/TimeSelect"));
const CommentsField = React.lazy(() => import("@/components/CommentField"));
const Button = React.lazy(() => import("@/components/Button"));
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
interface DetailsProps {}
const Details: FC<DetailsProps> = () => {
  const { setBreakfastOrder, loading } = useBreakfastOrderContext();
  const [selectedRoom, setSelectedRoom] = useState<string>("");
  const commentsRef = useRef<string>("");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(dayjs());
  const router = useRouter();

  const handleRoomChange = useCallback((event: SelectChangeEvent<string>) => {
    setSelectedRoom(event.target.value);
    setBreakfastOrder((prevOrder) => ({
      ...prevOrder,
      selectedRoom: event.target.value,
    }));
  }, []);

  const handleCommentsChange = useCallback(
    (event: React.ChangeEvent<{ value: string }>) => {
      commentsRef.current = event.target.value;
      setBreakfastOrder((prevOrder) => ({
        ...prevOrder,
        additionalComments: commentsRef.current,
      }));
    },
    []
  );

  const handleDateChange = useCallback((date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("DD-MM-YYYY");
      setBreakfastOrder((prevOrder) => ({
        ...prevOrder,
        selectedDate: formattedDate,
      }));
    }
  }, []);

  const handleTimeChange = useCallback((time: Dayjs | null) => {
    if (time) {
      const formattedTime = time.format("HH:mm");
      setBreakfastOrder((prevOrder) => ({
        ...prevOrder,
        selectedTime: formattedTime,
      }));
    }
  }, []);

  const handleConfirm = useCallback(() => {
    router.push("/summary-page");
  }, [router]);

  return (
    <>
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="lg:max-w-lg md:max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-neutral-950 font-bold mb-4">
            Provide the details
          </h1>
          {loading ? (
            <div className="text-xl font-bold mb-6">Loading...</div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <RoomSelect
                selectedRoom={selectedRoom}
                handleRoomChange={handleRoomChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateSelector
                  selectedDate={selectedDate}
                  handleDateChange={handleDateChange}
                />
                <TimeSelector
                  selectedTime={selectedTime}
                  handleTimeChange={handleTimeChange}
                />
              </LocalizationProvider>
              <p className="text-neutral-950 font-bold mb-2">
                Additional comments
              </p>
              <CommentsField
                value={commentsRef.current}
                onChange={handleCommentsChange}
              />
              <Button
                aria-label="Confirm"
                role="button"
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
