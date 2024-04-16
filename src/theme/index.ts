import { ThemeOptions, createTheme } from "@mui/material";
import { backgroundColors, borderColor, mainColors } from "./colors";

const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: mainColors.main,
            dark: backgroundColors.dark,
            light: mainColors.light,
            contrastText: mainColors.contrast
        },
        background: {
            default: mainColors.main,
            paper: backgroundColors.light 
        },
        divider: borderColor.main,
        action: {
            selected: backgroundColors.login
        }
    },
    typography: {
        fontSize: 20
    },
    components: {
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: backgroundColors.light,
                        "&:hover": {
                            backgroundColor: backgroundColors.light
                        }
                    },
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: `1px solid ${borderColor.main}`
                }
            }
        }
    }
}

const theme = createTheme(themeOptions)

export default theme