import { Box, Popper, TableCell, styled } from "@mui/material";

export const CustomTableCell = styled(TableCell)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export const CustomBox = styled(Box)(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    width: "33px",
    height: "33px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    transition: "0.5s ease",
    cursor: "pointer",
    "&:hover": {
        borderColor: theme.palette.primary.main
    }
}))

export const CustomPopper = styled(Popper)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    backgroundColor: "#fff",
    padding: "7px"
}))