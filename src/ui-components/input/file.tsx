import { Box, Button, Typography } from "@mui/material"
import { ChangeEvent, useState } from "react"

interface props {
    fileChange: (e: FileList | null) => void
}

const UIFile: React.FC<props> = ({fileChange}) => {
    const [file, setFile] = useState<FileList | null>(null)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        fileChange(e.target.files)
        setFile(e.target.files)
        console.log(e.target.files && e.target.files[0]);
        
    }
    
    return (
        <Box sx={{width: "100%"}}>
            <input 
                accept="image/*"
                type="file"
                onChange={handleChange}
                id="input-file"
                style={{
                    display: "none",
                }}
            />
            <label htmlFor="input-file" style={{
                display: "flex",
                // flexDirection: "column"
            }}>
                <Button variant="contained" component="span">Upload File</Button>
                <Typography sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    flexGrow: 1,
                    backgroundColor: "primary.contrastText",
                    padding: "0 10px"
                }}>{file ? file[0].name : "Nothing is chosen"}</Typography>
            </label>
        </Box>
    )
}

export default UIFile