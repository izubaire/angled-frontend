import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";

import { NavigationPanel } from "../../components/client_components";
import { TableMui, PaginationCompMui, PopupFeedback } from "../../components";

import isHospital from "../../validation/isHopital";
import api from "../../services/api";
import { trimDate } from "../../services/trimDate";

export default function ActiveJobDetail() {
  const [activeJobDetail, setActiveJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeJobData, setActiveJobData] = useState(true);
  const { id } = useParams();

  const fetchJobDetail = async () => {
    const {
      data: { results },
    } = await api.get(`jobs/${id}/applications/`);
    // const afterTrimming = trimDate(results, "applied_at");
    // if (!afterTrimming) {
    //   setOpen(true);
    //   setActiveJobData(false);
    // }
    // afterTrimming && setActiveJobDetail(afterTrimming);
    setActiveJobDetail(results);
  };

  useEffect(() => {
    // isHospital();
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
          width: { md: `calc(100% - ${240}px)` },
          overflow: "auto",
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
                candidate_name: "Candidate Name",
                location: "Location",
                phone: "Phone",
                email: "Email",
                social_security_number: "Social Security Number",
                driver_license: "Driver License",
                professional_license_verification:
                  "Professional License Verification",
                bill_rate: "Bill Rate",
                compliance_per_agency: "Compliance Per Agency",
                submitals_per_agency: "Submittal Per Agency",
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
