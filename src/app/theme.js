"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      text: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      text: "#a1a1a1",
    },
  },

  typography: {
    title: {
      fontWeight: 500,
      fontSize: "4rem",
      "@media (max-width:500px)": {
        fontSize: "3rem",
      },
    },
    subTitle: {
      fontSize: "3rem",
      "@media (max-width:500px)": {
        fontSize: "2rem",
      },
    },
    subTitle2: {
      fontSize: "1rem",
      color: "#a1a1a1",
    },

    aboutTitle: {
      fontSize: "1.3rem",
    },

    download: {
      fontSize: "1.2rem",
    },
  },
});

export default theme;
