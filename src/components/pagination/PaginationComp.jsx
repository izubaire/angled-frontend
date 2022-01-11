import React from "react";
import { Box, Pagination } from "@mui/material";

const PaginationComp = ({ setOffset, totalResumes }) => {
  const handleChange = (e, value) => {
    if (value === 1) {
      setOffset(0);
    } else {
      setOffset((value - 1) * 10);
    }
  };

  return (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <Pagination
        count={Math.ceil(totalResumes / 10)}
        color="primary"
        variant="outlined"
        shape="rounded"
        defaultPage={1}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PaginationComp;
