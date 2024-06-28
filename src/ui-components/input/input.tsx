import { TextField } from "@mui/material"
import { ChangeEvent, useState } from "react"

interface props {
    updateValue: (e: string) => void,
    type?: string,
    fullWidth?: boolean,
    placeholder?: string,
    defaultValue?: string | number
}

const UIInput: React.FC<props> = ({updateValue, type="text", fullWidth=true, placeholder, defaultValue}) => {
    const [value, setValue] = useState<string | number>(defaultValue || "")
    // const [error, setError] = useState<boolean>(false)

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        // if(e.target.value.length === 0 || !defaultValue || !value) setError(true)
        setValue(e.target.value)
        updateValue(e.target.value)
    }
    return (
        <TextField
            type={type}
            required
            placeholder={placeholder}
            id="outlined-basic" 
            variant="outlined" 
            onChange={handleInput} 
            value={value} 
            size="small"
            // error={error}
            // helperText={error ? "Please type something.." : ""}
            sx={{
                width: fullWidth ? "100%" : "80px",
                minWidth: "80px"
            }}
            fullWidth={fullWidth}
        />
    )
}

export default UIInput