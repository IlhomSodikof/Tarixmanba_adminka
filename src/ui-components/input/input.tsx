import { Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

interface props {
    options: string[],
    placeholder: string,
    updateValue: (e: string) => void
}

const UIInput: React.FC<props> = ({options, placeholder, updateValue}) => {
    const [value, setValue] = useState<string>("")

    const handleInput = (e: any) => {
        setValue(e.target.value)

    }

    return (
        <Autocomplete
            inputValue={value}
            onChange={handleInput}
            options={options}
            id="disable-clearable"
            disableClearable
            size="small"
            renderInput={params => (<TextField placeholder={placeholder} {...params} />)}
        />
    )
}

export default UIInput