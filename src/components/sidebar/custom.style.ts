import { AppBar, Box, styled } from "@mui/material";

export const CustomAppBar = styled(AppBar)(({theme}) => ({
    position: "sticky",
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
    transition: ".4s ease",
    overflow: "hidden"
}))

export const CustomLogoutBox = styled(Box)(() => ({
    position: "absolute",
    bottom: "30px",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    justifyContent: "center"
}))