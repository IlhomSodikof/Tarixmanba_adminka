import { useState } from "react"
import { CustomSwitch } from "./switch.custom.style"

interface props {
    value: boolean,
    changeValue: (e: boolean) => void
}

const UISwitch: React.FC<props> = ({value, changeValue}) => {
    const [val, setVal] = useState<boolean>(value || false)    
    
    const handleChange = (e: any) => {
        setVal(e.target.value)
        changeValue(e.target.value)
    }
    return (
        <>
            <CustomSwitch value={val} onChange={handleChange} />
        </>
    )
}

export default UISwitch