// mui
import { TableCell, TableRow, Typography } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
// custom style
import { CustomBox, CustomTableCell } from "./custom.style"
// react
import { useState } from "react"
// components
import PopperModal from "./popperModal"
// types
import { TableCellsProps } from "../../../types/source"

const TableCells: React.FC<TableCellsProps> = ({info}) => {
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