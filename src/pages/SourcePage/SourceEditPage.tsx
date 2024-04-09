import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"

const SourceEditPage: React.FC = () => {
    const {state} = useLocation()
    return (
        <Box>{JSON.stringify(state)}</Box>
    )
}

export default SourceEditPage