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
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

const golfTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2e7d32",
      dark: "#1b5e20",
      light: "#4caf50",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1976d2",
      dark: "#1565c0",
      light: "#42a5f5",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fefefe",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    success: {
      main: "#2e7d32",
      dark: "#1b5e20",
      light: "#4caf50",
    },
    error: {
      main: "#d32f2f",
      dark: "#c62828",
      light: "#f44336",
    },
    warning: {
      main: "#ff9800",
      dark: "#f57c00",
      light: "#ffb74d",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Times New Roman", serif',
      fontWeight: 'bold',
      color: '#2e7d32',
      letterSpacing: '0.5px',
    },
    h2: {
      fontFamily: '"Times New Roman", serif',
      fontWeight: 'bold',
      color: '#2e7d32',
      letterSpacing: '0.3px',
    },
    h3: {
      fontFamily: '"Times New Roman", serif',
      fontWeight: 'bold',
      color: '#2e7d32',
    },
    h4: {
      fontFamily: '"Times New Roman", serif',
      fontWeight: 'bold',
      color: '#2e7d32',
    },
    h5: {
      fontWeight: 600,
      color: '#2e7d32',
    },
    h6: {
      fontWeight: 600,
      color: '#333333',
    },
    body1: {
      color: '#333333',
      lineHeight: 1.6,
    },
    body2: {
      color: '#666666',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(46, 125, 50, 0.1)',
          border: '1px solid #e8f5e8',
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(46, 125, 50, 0.1)',
        },
        elevation3: {
          boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(46, 125, 50, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(46, 125, 50, 0.1)',
          border: '1px solid #e8f5e8',
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2e7d32',
          boxShadow: '0 2px 8px rgba(46, 125, 50, 0.2)',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#2e7d32',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderRight: '1px solid #e0e0e0',
          color: '#333333',
        },
      },
    },
  },
});

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});

function App(props) {
  const userInfo = {
    playerId: "626fa9fd-95ed-40e8-90f3-139ec79e79b9",
    tournamentId: "942b428e-2c9b-4f7a-9077-ea3cde99e184",
  };

  return (
    <ThemeProvider theme={golfTheme}>
      <CssBaseline />
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
                      <Outlet context={userInfo} />
                    </React.Suspense>
                  </RelayEnvironmentProvider>
                </main>
              </Container>
              <Footer />
            </Box>
          </>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
