import { Box, Container, styled } from "@mui/material";

export const CustomAppContainer = styled(Container)(() => ({
    backgroundColor: "#fff",
    margin: "10px auto",
    padding: "20px",
}))

export const CustomAppBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.primary.contrastText,
    width: "100%"
}))