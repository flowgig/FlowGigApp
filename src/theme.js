"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap"
});

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#C32A22"
        },
        secondary: {
            main: "#19857b"
        },
        error: {
            main: red.A400
        },
        background: {
            default: "#fff"
        }
    },
    typography: {
        fontFamily: roboto.style.fontFamily
    },
    components: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "#272b2f"
            }
        }
    }
});

export default theme;
