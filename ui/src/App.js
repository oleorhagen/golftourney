import logo from "./logo.svg";
import "./App.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";
// TODO
// (await Auth.currentSession()).getIdToken().getJwtToken()

import React, { useState } from "react";

import { Container } from "@mui/material";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Views
import ChampionsView from "./components/views/champions/champions";
import MainView from "./components/views/main/view";
import TourneyView from "./components/views/tourney/view";

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});

function App() {
  const [currentView, setView] = useState(MainView);
  const navBarItems = [
    { name: "Home", view: () => setView(MainView) },
    { name: "Tourney", view: () => setView(TourneyView) },
    { name: "Champions", view: () => setView(ChampionsView) },
  ];

  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <div className="App">
          <>
            <NavBar navBarItems={navBarItems} />
            <Container
              maxWidth="xl"
              sx={{ marginTop: (theme) => theme.spacing(4) }}
            >
              <div>
                <p>Welcome {user.username}</p>
                <button onClick={signOut}>Sign out</button>
              </div>
              <main>{currentView}</main>
            </Container>
            <Footer />
          </>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
