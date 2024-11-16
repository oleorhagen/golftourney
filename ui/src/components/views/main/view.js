import React from "react";

import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const MainView = () => {
  return (
    <>
      <Box
        component="clock"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FlipClockCountdown
          to={new Date("2025-06-28T10:00:00")}
          hideOnComplete={false}
        />
      </Box>
      {/* <Alert */}
      {/*   severity="success" */}
      {/*   sx={{ */}
      {/*     marginTop: (theme) => theme.spacing(4), */}
      {/*     justifyContent: "center", */}
      {/*   }} */}
      {/* > */}
      {/*   <AlertTitle>Skjeberg Invitational 2023 is now over!</AlertTitle> */}
      {/*   Congratulations to the winner: */}
      {/*   <strong> Marius Sollie</strong> */}
      {/* </Alert> */}
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          sx={{ margin: 5 }}
        >
          <Typography variant="h3" color="text.primary" align="center">
            {" "}
            Welcome to Skjeberg Invitational {new Date().getFullYear()}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          sx={{ margin: 5 }}
        >
          <Typography variant="h3" color="text.primary" align="center">
            {"Ole Petter"}
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            /* maxHeight: { xs: 233, md: 167 }, */
            /* maxWidth: { xs: 350, md: 250 }, */
          }}
          alt="Skjeberg Invitational Logo"
          src="skjeberg-logo-color.png"
        />
      </Container>
    </>
  );
};

export default MainView;
