// mui
import { TableCell, TableRow, Typography } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
// custom style
import { CustomBox, CustomTableCell } from "./custom.style"
// react
import { useState } from "react"
// components
import PopperModal from "./popperModal"

const TableCells: React.FC<{info: any}> = ({info}) => {
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const [hover, setHover] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(open ? null : event.currentTarget);
    };

    const keys = Object.keys(info)

    const arr = keys.slice(1, keys.length - 2)

    const arrTime = keys.slice(keys.length - 2)

    const cells = arr.map(key => {
        return (
            <TableCell key={key} sx={{
                height: "100%"
            }}>
                <Typography>{info[key]}</Typography>
            </TableCell>
        )
    })

    const cellsTime = arrTime.map((time: string) => {
        return (
            <TableCell key={time} sx={{
                height: "100%"
            }}>
                <Typography sx={{minWidth: "max-content"}}>{info[time].split("T")[0]}</Typography>
            </TableCell>
        )
    })

    return (
        <TableRow hover>
            {cells}
            {cellsTime}
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