import { AppBar, styled } from "@mui/material";

export const CustomAppBar = styled(AppBar)(({theme}) => ({
    position: "sticky",
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    transition: ".4s ease",
    overflow: "hidden"
}))