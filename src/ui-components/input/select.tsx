import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface props {
    options: string[],
    placeholder: string,
    updateValue: (e: string) => void,
    disabled?: boolean
}

const UISelect: React.FC<props> = ({options, placeholder, updateValue, disabled=true}) => {
    const [value, setValue] = useState<string>("")

    const handleInput = (_e: any, value: string) => {
        setValue(value)
        updateValue(value)
    }

    return (
        <Autocomplete
            fullWidth
            disabled={!disabled}
            value={value}
            onChange={handleInput}
            options={options}
            // id="disable-clearable"
            disableClearable
            size="small"
            renderInput={params => (<TextField placeholder={placeholder} {...params} />)}
        />
    )
}

export default UISelect