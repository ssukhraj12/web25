"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {lime, purple, red} from "@mui/material/colors";

let theme = createTheme({
    palette: {
        primary: red,
        secondary: purple,
    },
});

theme = responsiveFontSizes(theme);

export default theme;
