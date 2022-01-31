import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Stack,
  IconButton,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import api from "../../services/api";
import isHospital from "../../validation/isHopital";

import {
  TableMui,
  SelectOption,
  NavigationPanel,
  PaginationCompMui,
} from "../../components";

const Dashboard = () => {
  const [newJob, setNewJob] = useState([]);
  const [currentlyWorking, setCurrentlyWorking] = useState([]);
  const [positionType, setPositionType] = useState([]);
  const [selectPosition, setSelectPosition] = useState({
    new_jobs: "",
    currently_working: "",
  });

  const [clearFilterNewJob, setClearFilterNewJob] = useState(false);
  const [clearFilterCurrentlyWorking, setClearFilterCurrentlyWorking] =
    useState(false);

  const [currentlyWorkingDefaultPage, setCurrentlyWorkingDefaultPage] =
    useState(1);
  const [newJobDefaultPage, setNewJobDefaultPage] = useState(1);
  const [countNewJobs, setCountNewJobs] = useState(0);
  const [countCurrentlyWorking, setCountCurrentlyWorking] = useState(0);

  let offsetEndpoint = "&limit=10&offset=";
  let newJobEndpoint = `jobs/?new=true`;
  let currentlyWorkingEndpoint = `jobs/?active=true`;
  let positionTypeEndpoint = "position_types/";
  let positionFilterEndpoint = "jobs/?new=true&position_type=";

  const fetchNewJob = async (Endpoint) => {
    const { data } = await api.get(Endpoint);
    setNewJob(data.results);
    setCountNewJobs(data.count);
  };
  const fetchCurrentlyWorking = async (Endpoint) => {
    const { data } = await api.get(Endpoint);
    setCurrentlyWorking(data.results);
    setCountCurrentlyWorking(data.count);
  };
  const fetchPositionType = async () => {
    const { data } = await api.get(positionTypeEndpoint);
    setPositionType(data.results);
  };

  useEffect(() => {
    fetchPositionType();
    isHospital();
    fetchNewJob(newJobEndpoint + offsetEndpoint + 0);
    fetchCurrentlyWorking(currentlyWorkingEndpoint + offsetEndpoint + 0);
  }, []);

  const handlePaginationChange = (event, value, name) => {
    let offsetValue = (value - 1) * 10;
    if (name === "newJob") {
      if (clearFilterNewJob) {
        const { new_jobs: filterValue } = selectPosition;
        fetchNewJob(
          positionFilterEndpoint + filterValue + offsetEndpoint + offsetValue
        );
      } else fetchNewJob(newJobEndpoint + offsetEndpoint + offsetValue);
    } else if (name === "currentlyWorking") {
      if (clearFilterCurrentlyWorking) {
        const { currently_working: filterValue } = selectPosition;
        fetchCurrentlyWorking(
          positionFilterEndpoint + filterValue + offsetEndpoint + offsetValue
        );
      } else
        fetchCurrentlyWorking(
          currentlyWorkingEndpoint + offsetEndpoint + offsetValue
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectPosition({ ...selectPosition, [name]: value });
    if (name === "new_jobs") {
      fetchNewJob(positionFilterEndpoint + value + offsetEndpoint + 0);
      setClearFilterNewJob(true);
    } else {
      fetchCurrentlyWorking(
        positionFilterEndpoint + value + offsetEndpoint + 0
      );
      setClearFilterCurrentlyWorking(true);
    }
  };

  // Handle Clear Filter
  const handleClearFilter = (x) => {
    if (x === "new_jobs") {
      setSelectPosition({ ...selectPosition, [x]: "" });
      setClearFilterNewJob(false);
      fetchNewJob(newJobEndpoint + offsetEndpoint + 0);
      setNewJobDefaultPage(1);
    } else {
      setSelectPosition({ ...selectPosition, [x]: "" });
      setClearFilterCurrentlyWorking(false);
      fetchCurrentlyWorking(currentlyWorkingEndpoint + offsetEndpoint + 0);
      setCurrentlyWorkingDefaultPage(1);
    }
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
                value={selectPosition.new_jobs}
                onChange={handleChange}
              />
              {clearFilterNewJob && (
                <IconButton onClick={() => handleClearFilter("new_jobs")}>
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
              link={"/adm/new-job/detail/"}
              btnName="Detail"
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
              defaultNumber={newJobDefaultPage}
            />
          </Box>
        </Box>

        <Box component={Paper} sx={{ marginBottom: "20px", padding: "20px" }}>
          <Typography variant="h5" sx={{ marginBottom: "10px" }}>
            Currently Working
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
                name="currently_working"
                label="Position Type"
                size="small"
                selectCss={{ width: "200px" }}
                data={positionType}
                value={selectPosition.currently_working}
                onChange={handleChange}
              />
              {clearFilterCurrentlyWorking && (
                <IconButton
                  onClick={() => handleClearFilter("currently_working")}
                >
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
                submitted_by: "Submitted by",
                shift: "Shift",
                speciality: "Speciality",
                profession: "Profession",
                id: "Submittals",
              }}
              td={currentlyWorking}
              link={"/adm/active-job/detail/"}
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
              defaultNumber={currentlyWorkingDefaultPage}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
