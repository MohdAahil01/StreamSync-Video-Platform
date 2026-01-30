import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#8338ec",
      light: "#a76bf2",
      dark: "#5f23b8",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff9839", // Preserving the brand orange
      contrastText: "#fff",
    },
    background: {
      default: "#121212",
      paper: "#1E1E2E",
    },
    text: {
      primary: "#F5F5F7",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 800,
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0px 4px 12px rgba(131, 56, 236, 0.4)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #8338ec 0%, #3a86ff 100%)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8338ec",
            },
          },
        },
      },
    },
  },
});

export default theme;
