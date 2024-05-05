import logo from "./logo.svg";
import "./App.css";

import Box from "@mui/material/Box";

import { Outlet } from "react-router-dom";

import { RelayEnvironmentProvider } from "react-relay/hooks";

import RelayEnvironment from "./RelayEnvironment";

// AWS user authentication
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Auth } from "aws-amplify";

import React from "react";

import { Container } from "@mui/material";

import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});

function App(props) {
  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => {
        return (
          <div className="App">
            <Box sx={{ display: "flex" }}>
              <Drawer navbarItems={props.navbarItems} />
              <>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  <Container
                    maxWidth="xl"
                    sx={{ marginTop: (theme) => theme.spacing(10) }}
                  >
                    <main>
                      <RelayEnvironmentProvider environment={RelayEnvironment}>
                        <React.Suspense fallback={"Loading..."}>
                          <Outlet
                            context={"626fa9fd-95ed-40e8-90f3-139ec79e79b9"}
                          />
                        </React.Suspense>
                      </RelayEnvironmentProvider>
                    </main>
                  </Container>
                  <Footer />
                </Box>
              </>
            </Box>
          </div>
        );
      }}
    </Authenticator>
  );
}

export default App;
