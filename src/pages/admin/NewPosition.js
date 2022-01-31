import React, { useState, useEffect } from "react";
import { Box, Toolbar, CssBaseline, TextField, Stack } from "@mui/material";
import {
  NavigationPanel,
  AdminButton,
  SelectOption,
  PopupFeedback,
} from "../../components";

import api from "../../services/api";
import isHospital from "../../validation/isHopital";

export default function NewPosition() {
  let empyFields = {
    position: "",
    position_type: "",
    location: "",
    unit: "",
    shift: "",
    speciality: "",
    profession: "",
  };
  const [newPosition, setNewPosition] = useState(empyFields);

  let positionTypeEndpoint = "position_types/";
  let shiftEndpoint = "job_shifts/";
  const [positionType, setPositionType] = useState([]);
  const [shift, setShift] = useState([]);

  const newPositionEndpoint = "jobs/";

  const fetchPositionType = async () => {
    const { data } = await api.get(positionTypeEndpoint);
    setPositionType(data.results);
  };

  const fetchShift = async () => {
    const { data } = await api.get(shiftEndpoint);
    setShift(data.results);
  };

  useEffect(() => {
    fetchPositionType();
    fetchShift();
    isHospital();
  }, []);

  const [disabledButton, setDisabledButton] = useState(false);
  const handleChange = (event) => {
    disabledButton && setDisabledButton(false);
    const { name, value } = event.target;
    setNewPosition({ ...newPosition, [name]: value });
  };

  const [open, setOpen] = useState(false);
  const [getPositionName, setGetPositionName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    !disabledButton && setDisabledButton(true);
    const response = await api.post(newPositionEndpoint, newPosition);
    if (response.status === 201) {
      setDisabledButton(false);
      setOpen(true);
      setNewPosition(empyFields);
      setGetPositionName(response.data.position);
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
          width: { md: `calc(100% - ${240}px)` },
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form className="" onSubmit={handleSubmit}>
            <h4 style={{ textAlign: "center" }}>New Positions</h4>
            <TextField
              required
              label="Facility Name"
              name="position"
              inputProps={{ maxLength: 150 }}
              id="outlined-name"
              onChange={handleChange}
              value={newPosition.position}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <Box sx={{ width: "290px" }}>
                <SelectOption
                  name="position_type"
                  label="Position Type"
                  value={newPosition.position_type}
                  onChange={handleChange}
                  data={positionType}
                  style={{ width: "100%" }}
                />
              </Box>
              <TextField
                required
                label="Location"
                name="location"
                inputProps={{ maxLength: 10 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.location}
                sx={{ width: "290px" }}
              />
            </Stack>
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                label="Unit"
                name="unit"
                inputProps={{ maxLength: 30 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.unit}
                sx={{ width: "290px" }}
              />
              <Box sx={{ width: "290px" }}>
                <SelectOption
                  name="shift"
                  label="Shift"
                  value={newPosition.shift}
                  onChange={handleChange}
                  data={shift}
                  style={{ width: "100%" }}
                />
              </Box>
            </Stack>
            <Stack
              direction="row"
              sx={{ flexWrap: "wrap", gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                label="Speciality"
                name="speciality"
                inputProps={{ maxLength: 30 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.speciality}
                sx={{ width: "290px" }}
              />
              <TextField
                required
                label="Profession"
                name="profession"
                inputProps={{ maxLength: 50 }}
                id="outlined-name"
                onChange={handleChange}
                value={newPosition.profession}
                sx={{ width: "290px" }}
              />
            </Stack>
            <AdminButton
              name="Submit"
              type="submit"
              disabled={disabledButton}
              size="medium"
              style={{
                backgroundColor: "#00184c",
                "&:hover": { backgroundColor: "#002370" },
                whiteSpace: "nowrap",
              }}
            />
          </form>
        </Box>
        <PopupFeedback
          title="Form Submitted Successfully"
          content={`Job Created Successfully for position ` + getPositionName}
          isOpen={open}
        />
      </Box>
    </Box>
  );
}
