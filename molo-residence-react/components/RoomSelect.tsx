import React, { FC } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface RoomSelectProps {
  selectedRoom: string;
  handleRoomChange: (event: SelectChangeEvent<string>) => void;
}

const RoomSelect: FC<RoomSelectProps> = ({
  selectedRoom,
  handleRoomChange,
}) => {
  return (
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
  );
};

export default RoomSelect;
