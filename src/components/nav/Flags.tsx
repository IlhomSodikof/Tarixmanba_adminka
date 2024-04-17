import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import {languages} from "./flags"
import { useState } from "react"
import { languageTypes } from "../../types/languages"
import { useLanguageContext } from "../../context/LanguageContext"

const FlagsComp = () => {
    const {language, changeLanguage} = useLanguageContext()
    const [value, setValue] = useState<languageTypes>(language)

    const setLanguage = (f: string) => {
        changeLanguage(f)
        setValue(f)
    }
    return (
        <Select 
            value={value}
            size="small"
            onChange={(e: SelectChangeEvent) => setLanguage(e.target.value)}
        >
            {languages.map(language => {
                return (
                    <MenuItem value={language.toLowerCase()}>{language}</MenuItem>
                )
            })}
        </Select>
    )
}

export default FlagsComp