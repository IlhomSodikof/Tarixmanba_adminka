import { Box, Button, Typography } from "@mui/material"
import { useState } from "react"
import UIInput from "../../ui-components/input/input"
import { createLibraryCategories } from "../../api/apiPostCalls"
import { useNavigate } from "react-router-dom"

const LibraryCategoriesCreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>("")
    const [active, setActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleSubmit = () => {
        if(!title) return
        setActive(true)
        createLibraryCategories({title})
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => {
                setActive(false)
                navigate("/library-categories", {replace: true})
            })
    }

    return (
        <Box>
            <Typography sx={{marginBottom: "10px"}}><span style={{color: "red"}}>*</span> Title</Typography>
            <UIInput updateValue={(e) => setTitle(e)} />
            <Button variant="contained" disabled={active} sx={{marginTop: "20px"}} onClick={handleSubmit}>Create</Button>
        </Box>
    )
}

export default LibraryCategoriesCreatePage