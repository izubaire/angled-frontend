import React, { useEffect, useState } from "react";
import {
  Box,
  Pagination,
  CssBaseline,
  Typography,
  Toolbar,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import axios from "axios";

import { NavigationPanel } from "../../components/client_components";

import { WebButton, AdminButton, PaginationCompMui } from "../../components";

import { BASE_URL_BASE } from "../../utils/constants";

export default function Resume() {
  // Get 10 record forward from this index
  const [offset, setOffset] = useState(0);
  const [totalResumes, setTotalResumes] = useState(0);
  const [resumes, setResumes] = useState([]);

  const [ishospital, setIshospital] = useState(false);
  useEffect(() => {
    axios.get(`/api/ishospital/`).then((resp) => {
      if (!resp.data) {
        window.location.href = `${BASE_URL_BASE}/login/`;
      }
      setIshospital(resp.data);
    });
  }, []);

  useEffect(() => {
    if (ishospital) {
      axios
        .get(`/api/resume/?offset=${offset}&limit=10`)
        .then(async (resp) => {
          setResumes(resp?.data?.results);
          setTotalResumes(resp?.data?.results?.length);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [offset, ishospital]);

  return (
    <>
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
          {ishospital ? (
            <>
              {/* <Navbar /> */}
              <Toolbar />
              <Box
                component={Paper}
                sx={{ marginBottom: "20px", padding: "20px" }}
              >
                <Typography variant="h5" sx={{ marginBottom: "10px" }}>
                  Resumes
                </Typography>
                <Box>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead
                        sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
                      >
                        <TableRow>
                          <TableCell>Date / Time</TableCell>
                          <TableCell align="center">Position</TableCell>
                          <TableCell align="center">Location</TableCell>
                          <TableCell align="center">Shift</TableCell>
                          <TableCell align="center">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {resumes?.map((formdata, index) => {
                          let splitted = formdata?.created_at?.split("T");
                          return (
                            <TableRow
                              key={index}
                              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                <span>{splitted[0]}</span>
                                <span>{splitted[1].split(".")[0]}</span>
                              </TableCell>
                              <TableCell align="center">
                                {formdata?.job_post?.position}
                              </TableCell>
                              <TableCell align="center">
                                {formdata?.job_post?.location}
                              </TableCell>
                              <TableCell align="center">
                                {formdata?.job_post?.shift}
                              </TableCell>
                              <TableCell align="center">
                                <a
                                  href={`${BASE_URL_BASE}/${formdata?.resume_url}`}
                                  download={`resume-${formdata?.resume?.id}.pdf`}
                                >
                                  <p style={{ marginBottom: "3px" }}>
                                    <AdminButton
                                      name="Download"
                                      size="small"
                                      btnStyle={{
                                        backgroundColor: "#32abe2",
                                        "&:hover": {
                                          backgroundColor: "#32abe2",
                                        },
                                        // marginBottom: "5px"
                                      }}
                                      fullWidth={true}
                                    />
                                    {/* <WebButton
                                                            name="Download"
                                                            class="bg-sky clr-white"
                                                            handleClick={() => {}}
                                                            /> */}
                                  </p>
                                </a>
                                <a
                                  href={`${BASE_URL_BASE}/${formdata?.resume_url}`}
                                  target="_blank"
                                >
                                  <div>
                                    <AdminButton
                                      name="View"
                                      size="small"
                                      btnStyle={{
                                        backgroundColor: "#32abe2",
                                        "&:hover": {
                                          backgroundColor: "#32abe2",
                                        },
                                      }}
                                      fullWidth={true}
                                    />
                                    {/* <WebButton
                                                            class="mt-3 bg-sky clr-white"
                                                            name="View"
                                                            handleClick={() => {}}
                                                            /> */}
                                  </div>
                                </a>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* {totalResumes > 10 ? (
                            <PaginationCompMui
                                setOffset={setOffset}
                                totalResumes={totalResumes}
                            />
                            ) : (
                            <></>
                            )} */}
                  <PaginationCompMui
                    setOffset={setOffset}
                    totalResumes={totalResumes}
                  />
                </Box>
              </Box>
              {/* <section className="p-lg-5 p-md-3 p-2">
                        <div className=" " style={{ paddingTop: "2rem" }}>
                        <h3 className="clr-purple">Resumes</h3>

                        </div>
                    </section> */}
              {/* <Footer /> */}
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
    </>
  );
}
