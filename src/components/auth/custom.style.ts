import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.action.selected,
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export const CustomInnerBox = styled(Box)(() => ({
    backgroundColor: "#fff",
    padding: "40px",
    width: "100%",
    maxWidth: "512px",
    textAlign: "center"
}))