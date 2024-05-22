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
    filtered: string[],
    deleteText: string
}

const TableCells: React.FC<props> = ({info, filtered, deleteText}) => {
    const [open, setOpen] = useState<HTMLElement | null>(null)
    const [hover, setHover] = useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpen(open ? null : event.currentTarget);
    };

    const cells = filtered.map((data: string, index: number) => {        
        return (
            <TableCell key={index} sx={{
                height: "100%",
                maxWidth: "400px",
                textWrap: "wrap"
            }}>
                {
                    typeof data === "string" && data.includes("media") && data.includes("icons") ? <img src={data} alt={data} width={80} /> : <Typography>{data}</Typography>
                }
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
                <PopperModal open={open} changeOpen={e => setOpen(e)} info={info} deleteText={deleteText} />
            </CustomTableCell>
        </TableRow>    
    )
}

export default TableCells