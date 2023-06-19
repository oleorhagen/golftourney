import logo from "./logo.svg";
import "./App.css";

import { Outlet } from "react-router-dom";

// AWS user authentication
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

import React, { useState } from "react";

import { Container } from "@mui/material";

import Drawer from "./components/Drawer";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Utils
import user2ID from "./user-to-id";

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});

function App() {
  // const [currentView, setView] = useState(MainView);
  const navBarItems = [
    { name: "Home", link: "/" },
    { name: "Tourney", link: "/tourney" },
    { name: "Competitions", link: "/competition" },
    { name: "Champions", link: "/champions" },
  ];

  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => {
        console.log(user);
        return (
          <div className="App">
            <Drawer navBarItems={navBarItems} />
            <>
              <Container
                maxWidth="xl"
                sx={{ marginTop: (theme) => theme.spacing(4) }}
              >
                <div>
                  <p>Welcome {user.username}</p>
                  <p>With user id: {user2ID(user.username)}</p>
                  <p>Welcome {user.attributes.sub}</p>
                  <button onClick={signOut}>Sign out</button>
                </div>
                <main>
                  <Outlet />
                </main>
              </Container>
              <Footer />
            </>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;
