import React, { FC } from "react";
import TextField from "@mui/material/TextField";
interface CommentsProps {
  value: string;
  onChange: (event: React.ChangeEvent<{ value: string }>) => void;
}

const CommentsField: FC<CommentsProps> = ({ value, onChange }) => {
  return (
    <TextField
      data-testid="comments"
      fullWidth
      id="comments"
      label="Comments"
      multiline
      rows={4}
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
    />
  );
};
export default CommentsField;
