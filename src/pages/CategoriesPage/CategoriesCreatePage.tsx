import { Box, Button, Typography } from "@mui/material"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import UISwitch from "../../ui-components/input/switch"
import { useState } from "react"
import { createData } from "../../api/apiPostCalls"

const CategoriesCreatePage: React.FC = () => {
    const [icon, setIcon] = useState<FileList | null>(null)
    const [title, setTitle] = useState<string>("")
    const [order, setOrder] = useState<number>(0)
    const [interactive, setInteractive] = useState<boolean>(false)

    const handleSubmit = () => {
        if(!icon || !title || !order) {
            console.log("change it");
            return
        }
        const data = new FormData()
        data.append("icon", icon[0], icon[0].name)
        data.append("title", title)
        data.append("order", order.toString())
        data.append("interactive", interactive.toString())

        createData("category", data, true)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => console.log("working", data, icon[0].type, icon))
    }

    return (
        <Box>
            <Typography sx={{margin: "10px 0"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />
            <Typography sx={{marginBottom: "20px"}}></Typography>
            <UIFile fileChange={(e) => setIcon(e)} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Order</Typography>
            <UIInput updateValue={(e: any) => setOrder(e)} type="number" />
            <Typography sx={{margin: "10px 0"}}>Interactive Map</Typography>
            <UISwitch value={interactive} changeValue={(e) => setInteractive(e)} />

            <Button variant="contained" onClick={handleSubmit} sx={{marginTop: "20px"}}>Create</Button>
        </Box>
    )
}

export default CategoriesCreatePage