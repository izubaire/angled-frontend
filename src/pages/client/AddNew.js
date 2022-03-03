import React, { useState } from "react";
import { Box, Toolbar, CssBaseline, TextField, Stack } from "@mui/material";
import {
  NavigationPanel,
  DarkBlueButton,
  LabelSelect,
  CheckSelect,
} from "../../components/client_components";
import { AdminButton, PopupFeedback } from "../../components";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AddNew() {
  const { id } = useParams();
  let emptyFields = {
    job_post: id,
    candidate_name: "",
    phone: "",
    email: "",
    social_security_number: "",
    driver_license: "",
    professional_license_verification: "2094582",
    bill_rate: "",
    compliance_per_agency: "",
    submitals_per_agency: "",
  };
  const [addNew, setAddNew] = useState(emptyFields);
  const [disabledButton, setDisabledButton] = useState(false);

  const handleChange = (event) => {
    disabledButton && setDisabledButton(false);
    const { name, value } = event.target;
    setAddNew({ ...addNew, [name]: value });
  };

  const [open, setOpen] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    !disabledButton && setDisabledButton(true);
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    const response = await axios.post("/api/applications/", addNew);
    if (response.status === 201) {
      setDisabledButton(false);
      setOpen(true);
      setAddNew(emptyFields);
    }
  };

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
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <form className="" onSubmit={handleSubmit}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                type="text"
                label="Candidate Name"
                name="candidate_name"
                value={addNew.candidate_name}
                id="outlined-name"
                onChange={handleChange}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
              <TextField
                required
                // type="number"
                name="phone"
                inputProps={{ maxLength: 16 }}
                value={addNew.phone}
                label="Cell No"
                id="outlined-name"
                onChange={handleChange}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
            </Stack>
            <TextField
              required
              type="email"
              name="email"
              value={addNew.email}
              label="Email"
              id="outlined-name"
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                type="text"
                name="social_security_number"
                value={addNew.social_security_number}
                inputProps={{ maxLength: 11 }}
                label="Social Security Number"
                id="outlined-name"
                onChange={handleChange}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
              <TextField
                required
                type="text"
                name="driver_license"
                value={addNew.driver_license}
                inputProps={{ maxLength: 8 }}
                label="Driver License or ID"
                id="outlined-name"
                onChange={handleChange}
                sx={{ width: { xs: "100%", sm: "280px" } }}
              />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
              <TextField
                required
                name="bill_rate"
                value={addNew.bill_rate}
                label="Bill Rate"
                id="outlined-name"
                onChange={handleChange}
                type="number"
                // InputProps={{ inputProps: { min: 0, max: 10 } }}
                sx={{ width: { xs: "100%" } }}
              />
            </Stack>
            <TextField
              required
              name="compliance_per_agency"
              value={addNew.compliance_per_agency}
              label="Compliance Per Agency"
              id="outlined-name"
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <TextField
              required
              name="submitals_per_agency"
              value={addNew.submitals_per_agency}
              label="Submittals Per Agency"
              id="outlined-name"
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "25px" }}
            />
            <Stack
              direction="column"
              sx={{ gap: "15px", marginBottom: "25px" }}
            >
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
            </Stack>
          </form>
        </Box>
        <PopupFeedback
          title="Form Submitted Successfully"
          content={`Job Application Created Successfully`}
          isOpen={open}
        />
      </Box>
    </Box>
  );
}
