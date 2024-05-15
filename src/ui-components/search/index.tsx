import { Box, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"
import UIButton from "../button"

interface props {
    updateSearch: (e: string) => void,
    isCreate?: boolean
}

const UISearch: React.FC<props> = ({updateSearch, isCreate=true}) => {
    const [search, setSearch] = useState<string>("")
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateSearch(e.target.value)
        setSearch(e.target.value)
    }

    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Box sx={{width: "100%"}}>
                <Typography><span style={{color: "red"}}>*</span> Search source</Typography>
                <TextField 
                    value={search}
                    onChange={handleChange}
                    size="small" 
                    autoComplete="" 
                    required 
                    sx={{maxWidth: "400px", width: "100%"}} 
                />
            </Box>
            {isCreate && (
                <UIButton 
                    text="Create"
                    to="create"
                />
            )}
        </Stack>
    )
}

export default UISearch