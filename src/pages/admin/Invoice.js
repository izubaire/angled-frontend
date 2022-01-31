import React, { useEffect, useState } from "react";
import {
  Box,
  Toolbar,
  Typography,
  CssBaseline,
  Stack,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import {
  NavigationPanel,
  PaginationCompMui,
  TableMui,
  SelectOption,
} from "../../components";

import api from "../../services/api";
import isHospital from "../../validation/isHopital";

export default function Invoice() {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const [currentlyWorking, setCurrentlyWorking] = useState([]);
  const [currentlyWorkingClone, setCurrentlyWorkingClone] =
    useState(currentlyWorking);
  const [positionType, setPositionType] = useState([]);
  const [selectPosition, setSelectPosition] = useState({
    new_jobs: "",
    currently_working: "",
  });

  const [clearFilterCurrentlyWorking, setClearFilterCurrentlyWorking] =
    useState(false);

  const [currentlyWorkingDefaultPage, setCurrentlyWorkingDefaultPage] =
    useState(1);
  const [countCurrentlyWorking, setCountCurrentlyWorking] = useState(0);

  let offsetEndpoint = "&limit=10&offset=";
  let currentlyWorkingEndpoint = `jobs/?active=true`;
  let positionTypeEndpoint = "position_types/";
  let positionFilterEndpoint = "jobs/?new=true&position_type=";

  const fetchCurrentlyWorking = async (Endpoint) => {
    const { data } = await api.get(Endpoint);
    setCurrentlyWorking(data.results);
    setCurrentlyWorkingClone(data.results);
    setCountCurrentlyWorking(data.count);
  };
  const fetchPositionType = async () => {
    const { data } = await api.get(positionTypeEndpoint);
    setPositionType(data.results);
  };

  useEffect(() => {
    fetchPositionType();
    isHospital();
    fetchCurrentlyWorking(currentlyWorkingEndpoint + offsetEndpoint + 0);
  }, []);

  const handlePaginationChange = (event, value, name) => {
    let offsetValue = (value - 1) * 10;
    if (name === "currentlyWorking") {
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
    fetchCurrentlyWorking(positionFilterEndpoint + value + offsetEndpoint + 0);
    setClearFilterCurrentlyWorking(true);
    setLocation("");
    setKeywords("");
  };

  // Handle Clear Filter
  const handleClearFilter = (x) => {
    setSelectPosition({ ...selectPosition, [x]: "" });
    setClearFilterCurrentlyWorking(false);
    fetchCurrentlyWorking(currentlyWorkingEndpoint + offsetEndpoint + 0);
    setCurrentlyWorkingDefaultPage(1);
    setLocation("");
    setKeywords("");
  };

  const handleKeywordChange = (e) => {
    setKeywords(e.target.value);
    getInvoice();
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    getInvoice();
  };

  const getInvoice = (e) => {
    setCurrentlyWorkingClone(currentlyWorking);
    if (keywords === "" && location === "") {
      setCurrentlyWorkingClone(currentlyWorking);
    } else if (keywords?.length > 0) {
      let keys_for_search = [
        "facility_name",
        "unit",
        "shift",
        "speciality",
        "profession",
      ];
      let filterKeyword = currentlyWorking.filter((job) =>
        keys_for_search.some((key) =>
          job[key]?.toLowerCase().includes(keywords?.toLowerCase())
        )
      );
      setCurrentlyWorkingClone(filterKeyword);
    } else if (location?.length > 0) {
      let locationFilter = currentlyWorking.filter((job) =>
        job?.location?.toLowerCase().includes(location?.toLowerCase())
      );
      setCurrentlyWorkingClone(locationFilter);
    } else {
      console.log("nothing condition");
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
            Invoices
          </Typography>
          <Box
            sx={{
              backgroundColor: "#dbdde1",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              sx={{ justifyContent: "start", flexWrap: "wrap", gap: "4" }}
            >
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
              {/* <TextField
                  label="Keyword"
                  name="keywords"
                  size="small"
                  inputProps={{ maxLength: 30 }}
                  id="outlined-name"
                  onChange={handleKeywordChange}
                  value={keywords}
                /> */}
              {/* <TextField
                  label="Location"
                  name="location"
                  size="small"
                  inputProps={{ maxLength: 30 }}
                  id="outlined-name"
                  onChange={handleLocationChange}
                  value={location}
                /> */}
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
                // id: "Submittals",
              }}
              td={currentlyWorkingClone}
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
}
