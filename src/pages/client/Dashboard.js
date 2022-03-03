import React, { useState, useEffect } from "react";
import { NavigationPanel } from "../../components/client_components";
import { TableMui, PaginationCompMui, SelectOption } from "../../components";

import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import api from "../../services/api";

export default function Dashboard() {
  const [positionType, setPositionType] = useState([]);
  const [selectPosition, setSelectPosition] = useState();

  const [clearFilterNewJob, setClearFilterNewJob] = useState(false);

  const [newJob, setNewJob] = useState([]);
  const [activeSubmittal, setActiveSubmittal] = useState([]);
  const [currentlyWorking, setCurrentlyWorking] = useState([]);

  // States for Pagination
  const [offsetNewJobs, setOffsetNewJobs] = useState(0);
  const [countNewJobs, setCountNewJobs] = useState(0);
  const [offsetCurrentlyWorking, setOffsetCurrentlyWorking] = useState(0);
  const [countCurrentlyWorking, setCountCurrentlyWorking] = useState(0);
  const [offsetActiveSubmittal, setOffsetActiveSubmittal] = useState(0);
  const [countActiveSubmittal, setCountActiveSubmittal] = useState(0);

  // Endpoints
  let offsetEndpoint = `&limit=10&offset=`;
  let newJobEndpoint = `posts/?`;
  let activeSubmittalEndpoint = `applications/?limit=10&offset=${offsetNewJobs}`;
  let currentlyWorkingEndpoint = `employments/?limit=10&offset=${offsetNewJobs}`;
  let positionTypeEndpoint = "position_types/";
  let positionFilterEndpoint = "jobs/?new=true&position_type=";

  // Appi Endpoints
  const fetchNewJob = async (Endpoint) => {
    const { data } = await api.get(Endpoint);
    setNewJob(data.results);
    setCountNewJobs(data.count);
  };
  const fetchCurrentlyWorking = async () => {
    const { data } = await api.get(currentlyWorkingEndpoint);
    setCurrentlyWorking(data.results);
    setCountCurrentlyWorking(data.count);
  };
  const fetchActiveSubmittal = async () => {
    const { data } = await api.get(activeSubmittalEndpoint);
    setActiveSubmittal(data.results);
    setCountActiveSubmittal(data.count);
  };
  const fetchPositionType = async () => {
    const { data } = await api.get(positionTypeEndpoint);
    setPositionType(data.results);
  };

  // Fetching Data
  useEffect(() => {
    fetchPositionType();
    fetchNewJob(newJobEndpoint + offsetEndpoint + 0);
  }, []);

  useEffect(() => {
    fetchCurrentlyWorking();
  }, [offsetCurrentlyWorking]);
  useEffect(() => {
    fetchActiveSubmittal();
  }, [offsetActiveSubmittal]);

  // Handle Pagination Change
  const handlePaginationChange = (event, value, name) => {
    let offsetValue = (value - 1) * 10;

    if (name === "newJob") {
      if (clearFilterNewJob) {
        const filterValue = selectPosition;
        fetchNewJob(
          positionFilterEndpoint + filterValue + offsetEndpoint + offsetValue
        );
      } else fetchNewJob(newJobEndpoint + offsetEndpoint + offsetValue);
    } else if (name === "currentlyWorking") {
      setOffsetCurrentlyWorking((value - 1) * 10);
    } else if (name === "activeSubmittal") {
      setOffsetActiveSubmittal((value - 1) * 10);
    }
  };

  // Handle select Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectPosition(value);
    if (name === "new_jobs") {
      fetchNewJob(positionFilterEndpoint + value + offsetEndpoint + 0);
      setClearFilterNewJob(true);
    }
  };

  // Handle Clear Filter
  const handleClearFilter = () => {
    setSelectPosition("");
    setClearFilterNewJob(false);
    fetchNewJob(newJobEndpoint + offsetEndpoint + 0);
  };

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
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            New Jobs
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dbdde1",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Stack spacing={2} direction="row">
              <SelectOption
                name="new_jobs"
                label="Position Type"
                size="small"
                selectCss={{ width: "200px" }}
                data={positionType}
                value={selectPosition}
                onChange={handleChange}
              />
              {clearFilterNewJob && (
                <IconButton onClick={handleClearFilter}>
                  <CloseIcon />
                </IconButton>
              )}
            </Stack>
          </Box>
          <Box>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              th={{
                position: "Facility Name",
                location: "Location",
                unit: "Unit",
                shift: "Shift",
                speciality: "Speciality",
                profession: "Profession",
                id: "Submittals",
              }}
              td={newJob}
              link={"/client/add-new/"}
              btnName="Apply"
              btnSize="small"
              btnStyle={{
                backgroundColor: "#b09150",
                "&:hover": { backgroundColor: "#c9a55a" },
              }}
            />
            <PaginationCompMui
              count={countNewJobs}
              onChange={handlePaginationChange}
              name="newJob"
            />
          </Box>
        </Box>
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Active Submitals
          </Typography>
          <Box>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              th={{
                candidate_name: "Candidate Name",
                location: "Location",
                shift: "Shift",
                speciality: "Speciality",
                profession: "Profession",
                social_security_number: "Social Security Number",
                driver_license: "Driver License",
                professional_license_verification:
                  "Professional License Verification",
                bill_rate: "Bill Rate",
                compliance_per_agency: "Compliance Per Agency",
                submitals_per_agency: "Submittal Per Agency",
                job_post: "Detail",
              }}
              td={activeSubmittal}
              link={"/client/active-job/"}
              btnName="Detail"
              btnSize="small"
              btnStyle={{
                backgroundColor: "#b09150",
                "&:hover": { backgroundColor: "#c9a55a" },
              }}
            />
            <PaginationCompMui
              count={countActiveSubmittal}
              onChange={handlePaginationChange}
              name="activeSubmittal"
            />
          </Box>
        </Box>
        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Currently Working
          </Typography>
          <Box>
            <TableMui
              styleTableTh={{ fontWeight: "bold", whiteSpace: "nowrap" }}
              th={{
                // job_post: "Job Post",
                candidate: "Candidate",
                starting_date: "Starting Date",
                social_security_number: "Social Security Number",
                driver_license: "Driver License",
                professional_license_verification:
                  "Professional License Verification",
                bill_rate: "Bill Rate",
                compliance_per_agency: "Compliance Per Agency",
                submitals_per_agency: "Submittal Per Agency",
                job_post_id: "Detail",
              }}
              td={currentlyWorking}
              link={"/client/currently-working/"}
              btnName="Detail"
              btnSize="small"
              btnStyle={{
                backgroundColor: "#b09150",
                "&:hover": { backgroundColor: "#c9a55a" },
              }}
            />
            <PaginationCompMui
              count={countCurrentlyWorking}
              onChange={handlePaginationChange}
              name="currentlyWorking"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
