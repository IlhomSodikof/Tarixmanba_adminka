import { TableCell, TableRow, Typography } from "@mui/material"
import { CustomBox, CustomTableCell } from "./custom.style"
import { MoreHoriz } from "@mui/icons-material"
import PopperModal from "./popperModal"
import { useState } from "react"

interface props {
    info: {
        category: string,
        title: string,
        created: Date,
        updated: Date
    }
}

const TableCells: React.FC<props> = ({info}) => {
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const [hover, setHover] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(open ? null : event.currentTarget);
    };

    return (
        <TableRow hover>
            <TableCell>
                <Typography>{info.category}</Typography>
            </TableCell>
            <TableCell>
                <Typography>{info.title}</Typography>
            </TableCell>
            <TableCell>
                <Typography>{info.created.toISOString().split("T")[0]}</Typography>
            </TableCell>
            <TableCell>
                <Typography>{info.updated.toISOString().split("T")[0]}</Typography>
            </TableCell>
            <CustomTableCell>
                <CustomBox onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <MoreHoriz color={hover ? "primary" : "inherit"}/>
                </CustomBox>
                <PopperModal open={open} changeOpen={e => setOpen(e)} info={info} />
            </CustomTableCell>
        </TableRow>    
    )
}

export default TableCells