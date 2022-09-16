import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#FCF951ff",
      light: "#c2f1ef",
      dark: "#e7db05",
    },
    primary: {
      main: "#53296e",
      light: "#714c8c",
      dark: "#47056e",
    },
  },
  typography: {},
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
