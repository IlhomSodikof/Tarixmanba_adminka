import { Box, CircularProgress } from "@mui/material"

const Loading: React.FC = () => {
    return (
        <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh"
        }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading