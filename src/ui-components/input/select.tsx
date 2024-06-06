import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface props {
    options: {[x: string]: string}[],
    defaultValue?: {[x: string]: string},
    placeholder: string,
    updateValue: (e: {[x: string]: string}) => void,
    disabled?: boolean
}

const UISelect: React.FC<props> = ({options, defaultValue, placeholder, updateValue, disabled=true}) => {
    const [val, setVal] = useState<string>(defaultValue?.value || "")
    const handleInput = (_e: any, value: {[x: string]: string}) => {
        setVal(value.value)
        updateValue(value)
    }

    // console.log(defaultValue, placeholder);

    // console.log(value);
     

    return (
        <Autocomplete
            fullWidth
            disabled={!disabled}
            onChange={handleInput}
            options={options}
            // defaultValue={defaultValue}
            getOptionLabel={(option) => option.value}
            value={{value: val}}
            disableClearable
            size="small"
            renderInput={params => (<TextField placeholder={placeholder} {...params} value={val} />)}
        />
    )
}

export default UISelect