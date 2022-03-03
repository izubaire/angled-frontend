import React from "react";
import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";

import {
  NavigationPanel,
  ColNineTable,
  BlueButton,
  Col9TableData,
} from "../../components/client_components";

export default function VendorActivity() {
  const col9TableData = Col9TableData();
  const col9TableDataClone = [...col9TableData];
  col9TableDataClone.map((val) => (val.c9 = <BlueButton name="Invoice" />));
  const tableBodyDataC9 = col9TableDataClone;

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
            Active Position
          </Typography>
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
  );
}
