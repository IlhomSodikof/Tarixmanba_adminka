import { Box, styled } from "@mui/material";

export const CustomLink = styled(Box)(({theme}) => ({
    position: "relative",
    height: "40px",
    transition: ".5s ease all",
    color: theme.palette.primary.light,
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff"
    }
}))