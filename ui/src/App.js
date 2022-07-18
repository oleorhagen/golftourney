import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

import { Container } from "@mui/material";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Views
import ChampionsView from "./components/views/champions/champions";
import MainView from "./components/views/main/view";
import TourneyView from "./components/views/tourney/view";

function App() {
  const [currentView, setView] = useState(MainView);
  const navBarItems = [
    { name: "Home", view: () => setView(MainView) },
    { name: "Tourney", view: () => setView(TourneyView) },
    { name: "Champions", view: () => setView(ChampionsView) },
  ];

  return (
    <div className="App">
      <>
        <NavBar navBarItems={navBarItems} />
        <Container
          maxWidth="xl"
          sx={{ marginTop: (theme) => theme.spacing(4) }}
        >
          <main>{currentView}</main>
        </Container>
        <Footer />
      </>
    </div>
  );
}

export default App;
