import React from "react";
import { Box, Pagination } from "@mui/material";

const PaginationComp = ({ count, onChange, name, defaultNumber }) => {
  return (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <Pagination
        count={Math.ceil(count / 10)}
        color="primary"
        variant="outlined"
        shape="rounded"
        defaultPage={defaultNumber}
        onChange={(event, value) => onChange(event, value, name)}
      />
    </Box>
  );
};
export default PaginationComp;
