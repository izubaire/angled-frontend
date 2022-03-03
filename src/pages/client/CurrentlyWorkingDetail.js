import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";

import { NavigationPanel } from "../../components/client_components";
import { TableMui, PopupFeedback } from "../../components";

import isHospital from "../../validation/isHopital";
import api from "../../services/api";
import { trimDate } from "../../services/trimDate";

export default function Position() {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    const { data } = await api.get(`jobs/${id}/employements/`);
    const afterTrimming = trimDate(data, "starting_date");
    if (!afterTrimming) {
      setOpen(true);
      setActiveJobData(false);
    }
    afterTrimming && setActiveJobDetail([afterTrimming]);
  };

  useEffect(() => {
    isHospital();
    fetchJobDetail();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavigationPanel />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
        }}
      >
        <Toolbar />
        {activeJobData ? (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Employee Detail
            </Typography>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              th={{
                starting_date: "Starting Date",
                candidate: "Candidate",
                email: "Email",
                phone: "Phone",
                location: "Location",
                social_security_number: "Social Security Number",
                driver_license: "Driver License",
                professional_license_verification:
                  "Professional License Verification",
                bill_rate: "Bill Rate",
                compliance_per_agency: "Compliance Per Agency",
                submitals_per_agency: "Submittals Per Agency",
              }}
              td={activeJobDetail}
            />
          </Box>
        ) : (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              No Employee Found!
            </Typography>
          </Box>
        )}
        <PopupFeedback
          title="Employee Detail"
          content={`Details haven't recieved yet!`}
          isOpen={open}
        />
      </Box>
    </Box>
  );
}
