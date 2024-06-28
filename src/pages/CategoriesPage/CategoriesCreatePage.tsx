import { Alert, Box, Button, Snackbar, Typography } from "@mui/material"
import UIInput from "../../ui-components/input/input"
import UIFile from "../../ui-components/input/file"
import UISwitch from "../../ui-components/input/switch"
import { useState } from "react"
import { createData } from "../../api/apiPostCalls"
import { updateSingleData } from "../../api/apiUpdateCalls"
import { useNavigate } from "react-router-dom"
import { getImageAsFile } from "../../utils/getImage"

const CategoriesCreatePage: React.FC<{isEdit?: boolean, data?: any}> = ({isEdit, data}) => {
    const [icon, setIcon] = useState<FileList | null>(null)
    const [title, setTitle] = useState<string>(data?.title || "")
    const [order, setOrder] = useState<number>(data?.order || 0)
    const [interactive, setInteractive] = useState<boolean>(data?.interactive || false)
    const [active, setActive] = useState<boolean>(false)

    const [error, setError] = useState<{[x: string]: string} | null>(null)
    const [open, setOpen] = useState<boolean>(false)

    const [fillError, setFillError] = useState<string>("")

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if(!isEdit && !icon || !title || !order) {
            setFillError("Please fill all the required fields")
            return
        }

        setActive(true)

        const form = new FormData()
        if(icon && icon[0]) form.append("icon", icon[0], icon[0].name)
        else {
            const result = await getImageAsFile(data?.icon, data?.icon)
            form.append("icon", result)
        }

        form.append("title", title)
        form.append("order", order.toString())
        form.append("interactive", interactive.toString())

        if(isEdit) {
            updateSingleData("category", data?.id, form, true)
                .then(res => {
                    console.log(res);
                    navigate("/categories", {replace: true})
                    return res
                })
                .catch(err => {
                    setOpen(true)
                    setError(err)
                })
                .finally(() => {
                    setActive(false)
                })
        }else{
            createData("category", form, true)
                .then(res => {
                    navigate("/categories", {replace: true})
                    return res
                })
                .catch(err => {
                    setOpen(true)
                    setError(err)
                })
                .finally(() => {
                    setActive(false)
                })
        }
    }

    return (
        <Box>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >{error?.message}</Alert>
            </Snackbar>
            <Typography sx={{margin: "10px 0"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} defaultValue={title} />
            <Typography sx={{marginBottom: "20px"}}></Typography>
            <UIFile fileChange={(e) => setIcon(e)} defaultFile={data?.icon} />
            <Typography sx={{margin: "20px 0 10px"}}><span style={{color: "red"}}>*</span> Order</Typography>
            <UIInput updateValue={(e: any) => setOrder(e)} type="number" defaultValue={order} />
            <Typography sx={{margin: "10px 0"}}>Interactive Map</Typography>
            <UISwitch value={interactive} changeValue={(e) => setInteractive(e)} />

            <Button variant="contained" disabled={active} onClick={handleSubmit} sx={{marginTop: "20px"}}>{isEdit ? "Edit" : "Create"}</Button>
            {fillError && <Alert severity="error" sx={{margin: "20px 0"}}>{fillError}</Alert>}
        </Box>
    )
}

export default CategoriesCreatePage