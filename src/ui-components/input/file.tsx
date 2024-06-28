import { Box, Button, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"

interface props {
    fileChange: (e: FileList | null) => void,
    defaultFile?: string | null,
    id?: string
}

const UIFile: React.FC<props> = ({fileChange, defaultFile, id}) => {
    const [name, setName] = useState<string>(defaultFile && defaultFile.split("/")[defaultFile.split("/").length - 1] || "")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(!e.target.files) return
        fileChange(e.target.files)
        setName(e.target.files[0].name)
    }
    
    return (
        <Box sx={{width: "100%"}}>
            <input 
                accept="image/*,audio/*"
                type="file"
                required
                onChange={handleChange}
                id={id ? `input-file-${id}`: "input-file"}
                style={{
                    display: "none",
                }}
            />
            <label htmlFor={id ? `input-file-${id}`: "input-file"} style={{
                display: "flex",
            }}>
                <Button variant="contained" component="span">Upload File</Button>
                <Typography sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    flexGrow: 1,
                    backgroundColor: "primary.contrastText",
                    padding: "0 10px"
                }}>{name}</Typography>
            </label>
        </Box>
    )
}

export default UIFile