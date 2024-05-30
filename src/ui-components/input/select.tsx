import { Autocomplete, TextField } from "@mui/material"

interface props {
    options: {[x: string]: string}[],
    defaultValue?: {[x: string]: string},
    placeholder: string,
    updateValue: (e: {[x: string]: string}) => void,
    disabled?: boolean
}

const UISelect: React.FC<props> = ({options, defaultValue, placeholder, updateValue, disabled=true}) => {
    const handleInput = (_e: any, value: {[x: string]: string}) => {
        updateValue(value)
    }

    console.log(defaultValue);

    const value = defaultValue?.value || ""
    console.log(value);
     

    return (
        <Autocomplete
            fullWidth
            disabled={!disabled}
            onChange={handleInput}
            options={options}
            // defaultValue={defaultValue}
            getOptionLabel={(option) => option.value}
            value={{value: value}}
            disableClearable
            size="small"
            renderInput={params => (<TextField placeholder={placeholder} {...params} value={value} />)}
        />
    )
}

export default UISelect