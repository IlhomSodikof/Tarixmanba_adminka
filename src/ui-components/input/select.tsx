import { Autocomplete, TextField } from "@mui/material"

interface props {
    options: {[x: string]: string}[],
    placeholder: string,
    updateValue: (e: {[x: string]: string}) => void,
    disabled?: boolean
}

const UISelect: React.FC<props> = ({options, placeholder, updateValue, disabled=true}) => {
    const handleInput = (_e: any, value: {[x: string]: string}) => {
        updateValue(value)
    }

    return (
        <Autocomplete
            fullWidth
            disabled={!disabled}
            onChange={handleInput}
            options={options}
            getOptionLabel={(option) => option.value}
            disableClearable
            size="small"
            renderInput={params => (<TextField placeholder={placeholder} {...params} />)}
        />
    )
}

export default UISelect