import { Box, CircularProgress } from "@mui/material"

const Loading: React.FC = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
        }}>
            <CircularProgress />
        </Box>
    )
}

export default Loading