import { Link, styled } from "@mui/material";

export const CustomLink = styled(Link)(({theme}) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "40px",
    gap: "10px",
    transition: ".5s ease all",
    color: theme.palette.primary.light,
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff"
    }
}))