import React from "react";

import { Container, Paper } from "@mui/material";

const StatsView = () => {
  return (
    <>
      <Container maxWidth="sm">
        <div className="Stats">
          <iframe
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              border: "none",
              height: "100%",
              width: "100%",
              margin: 0,
              padding: 0,
              overflow: "hidden",
            }}
            src="stats.html"
            title="description"
          ></iframe>
        </div>
      </Container>
    </>
  );
};

export default StatsView;
