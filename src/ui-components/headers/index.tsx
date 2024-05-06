import { TableCell, Typography } from "@mui/material"
import { DisplayDataHeaders } from "../../types"
import { useMemo } from "react"

const UIHeaders: React.FC<{headers: any}> = ({headers}) => {

    const totalHeaders = useMemo(() => {
        return headers.reduce((sum: number, header: any) => sum + header.space, 1)
    }, [headers])

    return headers.map((header: DisplayDataHeaders) => {
        return (
            <TableCell key={header.text} sx={{
                width: `${header.space/totalHeaders*100}%`
            }}>
                <Typography>{header.text}</Typography>
            </TableCell>    
        )
    })
}

export default UIHeaders