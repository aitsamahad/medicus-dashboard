import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { toggleDoctorApproval } from "../controllers/doctor";
import { UserContext } from "../context/UserContext";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    marginTop: 20,
    minHeight: "60vh",
    marginBottom: 200,
  },
  tableRoot: {
    maxWidth: 1200,
    float: "right",
  },
});

export default function DoctorsPage({ doctors }) {
  const { getDoctors } = useContext(UserContext);
  const classes = useStyles();

  const handleClick = (doctorId) => {
    toggleDoctorApproval(doctorId).then((res) => getDoctors());
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Doctor ID</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">PMDC ID</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Qualifications</TableCell>
              <TableCell align="left">Country</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctors.map((doctor, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {doctor.d_id}
                </TableCell>
                <TableCell align="left">{doctor.email}</TableCell>
                <TableCell align="left">{doctor.pmdc_id}</TableCell>
                <TableCell align="left">{doctor.f_name}</TableCell>
                <TableCell align="left">{doctor.l_name}</TableCell>
                <TableCell align="left">{doctor.gender}</TableCell>
                <TableCell align="left">{doctor.qualifications}</TableCell>
                <TableCell align="left">{doctor.country}</TableCell>
                <TableCell align="left">
                  <Button
                    variant="outlined"
                    color={doctor.approved ? "secondary" : "primary"}
                    onClick={() => handleClick(doctor.d_id)}
                  >
                    {doctor.approved ? "De-Activate" : "Activate"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
