// mui
import { Box, Button, Paper } from "@mui/material"
// react
import { Link } from "react-router-dom";
// custom styles
import { CustomPopper } from "./custom.style"
// types
import { PopperModalProps } from "../../types/source";
import { deleteItem } from "../../api/apiDeleteCalls";

const PopperModal: React.FC<PopperModalProps> = ({open, info, changeOpen, deleteText}) => {
    const handleDelete = () => {
        deleteItem(deleteText, info.id)
            .then(res => res)
            .catch(err => err)
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
                    }}
                ></Paper>
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
                    <Link to={`edit/${info.id}`} state={info.id}>Edit</Link>
                </Button>
                <Button variant="outlined" color="error" onClick={handleDelete}>Delete</Button>
            </CustomPopper>
        </Box>
    )
}

export default PopperModal