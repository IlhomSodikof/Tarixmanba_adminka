// mui
import { TableCell, TableRow, Typography } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
// custom style
import { CustomBox, CustomTableCell } from "./custom.style"
// react
import { useState } from "react"
// components
import PopperModal from "./popperModal"

interface props {
    info: any,
    filtered: string[]
}

const TableCells: React.FC<props> = ({info, filtered}) => {
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const [hover, setHover] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(open ? null : event.currentTarget);
    };

    const cells = filtered.map((data, index) => {
        return (
            <TableCell key={index} sx={{
                height: "100%"
            }}>
                <Typography>{data}</Typography>
            </TableCell>
        )
    })

    return (
        <TableRow hover>
            {cells}
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