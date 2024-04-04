import { Box, Button, Paper } from "@mui/material"
import { CustomPopper } from "./custom.style"
import { Link } from "react-router-dom";

interface props {
    open: HTMLElement | null,
    info: any,
    changeOpen: (e: any) => void
}

const PopperModal: React.FC<props> = ({open, info, changeOpen}) => {
    const handleDelete = () => {
        console.log(info.category);
    }

    return (
        <Box>
            {Boolean(open) && (
                <Paper 
                onClick={() => changeOpen(false)}
                sx={{
                    backgroundColor: "transparent",
                    position: "absolute",
                    inset: 0
                }}></Paper>
            )}
            <CustomPopper
                placement="bottom-end"
                open={Boolean(open)}
                anchorEl={open}
                sx={{
                    position: "static"
                }}
            >
                <Button variant="outlined">
                    <Link to={`${info.title.split(" ").join("-")}`} state={info}>Edit</Link>
                </Button>
                <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
            </CustomPopper>
        </Box>
    )
}

export default PopperModal