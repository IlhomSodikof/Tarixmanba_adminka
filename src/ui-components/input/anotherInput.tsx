import { Autocomplete, TextField } from "@mui/material";
import { useState, useEffect } from "react";

interface Props {
    options: { [x: string]: string }[],
    defaultValue?: { [x: string]: string }[],
    placeholder: string,
    updateValue: (e: {[x: string]: string}[]) => void,
    disabled?: boolean
}

const UIAnotherSelect: React.FC<Props> = ({ options, defaultValue, placeholder, updateValue, disabled = false }) => {
    const [val, setVal] = useState<{[x: string]: string}[]>(defaultValue || []);

    useEffect(() => {
        setVal(defaultValue || []);
    }, [defaultValue]);

    const handleInput = (_event: any, value: {[x: string]: string}[]) => {
        setVal(value);
        updateValue(value);
    };

    return (
        <Autocomplete
            multiple
            fullWidth
            disabled={disabled}
            onChange={handleInput}
            options={options}
            getOptionLabel={(option) => option.value}
            value={val}
            disableClearable
            size="small"
            renderInput={params => (
                <TextField 
                    {...params} 
                    placeholder={placeholder} 
                />
            )}
        />
    );
};

export default UIAnotherSelect;
