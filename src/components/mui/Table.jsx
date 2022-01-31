import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import AdminButton from "../buttons/AdminButton";

export default function TableMui({
  th,
  td,
  styleTableTh,
  styleTableThead,
  link,
  btnName,
  btnSize,
  btnStyle,
}) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead sx={styleTableThead}>
          <TableRow>
            {/* get [array of th object(values)] and map thier values */}
            {Object.values(th).map((value, index) => {
              return (
                <TableCell key={index} align="center" sx={styleTableTh}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Map the td array of objects */}
          {td?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* get [array of th object(keys)] to keep sync td with the name of th */}
              {Object.keys(th).map((key, ind) => {
                return (
                  <TableCell key={ind} align="center">
                    {key === "id" ||
                    key === "job_post_id" ||
                    key === "job_post" ? (
                      <Link to={link + row[key]}>
                        <AdminButton
                          name={btnName}
                          size={btnSize}
                          style={btnStyle}
                        />
                      </Link>
                    ) : (
                      row[key]
                    )}
                    {key === "sr" && index + 1}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
