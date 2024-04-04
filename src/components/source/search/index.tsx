import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Search: React.FC = () => {
    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Box sx={{width: "100%"}}>
                <Typography><span style={{color: "red"}}>*</span> Search source</Typography>
                <TextField size="small" autoComplete="" required sx={{maxWidth: "400px", width: "100%"}} />
            </Box>
            <Button variant="contained">
                <Link to={"create"}>Create</Link>
            </Button>
        </Stack>
    )
}

export default Search