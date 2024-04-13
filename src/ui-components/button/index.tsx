import { Button } from "@mui/material"
import { Link } from "react-router-dom"

interface props {
    text: string,
    to: string
}

const UIButton: React.FC<props> = ({text, to}) => {
    return (
        <Button variant="contained">
            <Link to={to}>{text}</Link>
        </Button>
    )
}

export default UIButton