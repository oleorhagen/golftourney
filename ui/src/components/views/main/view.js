import React from "react";

import { Box, Typography, Paper } from "@mui/material";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
// import "./style.css";

const MainView = () => {
  return (
    <>
      <Typography variant="h3" color="text.primary" align="center">
        {" "}
        Welcome to Skjeberg Invitational {new Date().getFullYear()}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        sx={{ margin: 20 }}
      >
        <Paper elevation={2}>
          <Typography
            sx={{ margin: 5 }}
            variant="h4"
            color="text.secondary"
            align="center"
          >
            {" "}
            Time left
          </Typography>
          <FlipClockCountdown
            to={"2023-06-29T10:00:00"}
            labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
            labelStyle={{
              fontSize: 10,
              fontWeight: 500,
              color: "text.secondary",
            }}
            digitBlockStyle={{ width: 40, height: 60, fontSize: 30 }}
            dividerStyle={{ color: "gray", height: 1 }}
            separatorStyle={{ color: "red", size: "6px" }}
            duration={0.4}
          >
            Finished
          </FlipClockCountdown>{" "}
        </Paper>
      </Box>
    </>
  );
};

export default MainView;
