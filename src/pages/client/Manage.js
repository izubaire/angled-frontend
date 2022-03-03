import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Paper,
  Stack,
} from "@mui/material";

import {
  NavigationPanel,
  ColNineTable,
  Col9TableData,
  BlueButton,
  LabelSelect,
} from "../../components/client_components";

export default function Manage() {
  const col9TableData = Col9TableData();
  const col9TableDataClone = [...col9TableData];
  col9TableDataClone.map((val) => (val.c9 = <BlueButton name="Invoice" />));
  const tableBodyDataC9 = col9TableDataClone;

  let menuItem = [
    { value: "1", name: "Operation1" },
    { value: "2", name: "Operation2" },
    { value: "3", name: "Operation3" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavigationPanel />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${240}px)` },
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Manage
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dbdde1",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Stack spacing={2}>
              <LabelSelect
                menuItem={menuItem}
                name="Manage"
                label="Manage"
                styleSelect={{ width: "200px" }}
                size="small"
              />
            </Stack>
          </Box>
          <Box>
            <ColNineTable
              h1="No."
              h2="Date/ Time"
              h3="Candidate"
              h4="cell number"
              h5="email address"
              h6="Professional license
            verification"
              h7="Skills checklist"
              h8="Location"
              h9="Action"
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              tableBodyData={tableBodyDataC9}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
