"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface Palette {
    brand: Palette["primary"];
    secGray: Palette["primary"];
    orange?: Palette["primary"];
  }

  interface PaletteOptions {
    brand?: PaletteOptions["primary"];
    secGray?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h6: {
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "24px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "30px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "32px",
    },
    h2: {
      fontSize: "40px",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  palette: {
    primary: {
      main: "#23A6F0",
    },
    brand: {
      light: "#2DC071",
      main: "#23856D",
    },
    secGray: {
      light: "#737373",
      main: "#252B42",
      dark: "#000",
    },
    orange: {
      main: '#E77C40'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1440,
      xl: 1536,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "none",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "@media (min-width: 600px)": {
            minHeight: "58px",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "14px",
          fontWeight: "bold",
          textDecoration: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorTop: {
          boxShadow: 'none',
          border: 'none'
        }
      },
    },
    MuiImageListItem: {
      styleOverrides: {
        img: {
          objectFit: 'unset',
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          border: "none",
          padding: "15px 40px",
          boxShadow: "none",
        },
        outlined: {
          border: "1px solid #23A6F0",
        },
        contained: {
          color: "white"
        },
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: "32px 16px",
          fontSize: '14px',
          textTransform: 'capitalize'
        },
      }
    }
  },
});

export default theme;
