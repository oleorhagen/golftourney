import logo from "./logo.svg";
import "./App.css";

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
            <Drawer navbarItems={props.navbarItems} />
            <>
              <Container
                maxWidth="xl"
                sx={{ marginTop: (theme) => theme.spacing(4) }}
              >
                <div>
                  <p>Welcome {user.username}</p>
                </div>
                <main>
                  <RelayEnvironmentProvider environment={RelayEnvironment}>
                    <React.Suspense fallback={"Loading..."}>
                      <Outlet context={[user.attributes.sub]} />
                    </React.Suspense>
                  </RelayEnvironmentProvider>
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
