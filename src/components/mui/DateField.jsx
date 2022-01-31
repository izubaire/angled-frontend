import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const DateField = ({ change }) => {
  return (
    <Stack m={1}>
      <TextField
        sx={{ minWidth: { xs: 200, sm: 320 } }}
        name="someDate"
        label="Starting Date"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        size="large"
        onChange={change}
        required={true}
        // defaultValue={values.someDate}
      />
    </Stack>
  );
};

export default DateField;
