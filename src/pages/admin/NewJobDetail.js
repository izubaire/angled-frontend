import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Toolbar, Typography, CssBaseline, Paper } from "@mui/material";
import { NavigationPanel, TableMui, PopupFeedback } from "../../components";

import isHospital from "../../validation/isHopital";
import api from "../../services/api";
import { trimDates } from "../../services/trimDate";

export default function Position() {
  const [newJobDetail, setNewJobDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const [newJobData, setNewJobData] = useState(true);
  const { id } = useParams();

  const fetchNewJobDetail = async () => {
    const {
      data: { results },
    } = await api.get(`jobs/${id}/applications/`);
    console.log(results);
    const afterTrimming = trimDates(results, "applied_at");
    console.log("afterTrimming", afterTrimming);
    if (!afterTrimming) {
      setOpen(true);
      setNewJobData(false);
    }
    afterTrimming && setNewJobDetail(afterTrimming);
  };

  useEffect(() => {
    isHospital();
    fetchNewJobDetail();
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
        {newJobData ? (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              Job Applicants
            </Typography>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              th={{
                sr: "No.",
                applied_at: "Date",
                candidate_name: "Candidate",
                email: "Email Address",
                // skills: "Skills",
                location: "Location",
                id: "Action",
              }}
              td={newJobDetail}
              link={"/adm/new-job/assign/"}
              btnName="Assign"
            />
          </Box>
        ) : (
          <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
            <Typography variant="h5" sx={{ marginBottom: "10px" }}>
              No Job Details Found!
            </Typography>
          </Box>
        )}
        <PopupFeedback
          title="Get Application"
          content={`Applications haven't recieved yet!`}
          isOpen={open}
        />
      </Box>
    </Box>
  );
}
