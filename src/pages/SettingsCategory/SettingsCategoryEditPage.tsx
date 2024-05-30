import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import SettingsCategoryCreatePage from "./SettingsCategoryCreatePage";

const SettingsCategoryEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data } = useFetchGetSingleData("connection_category", id)
    
    if(!data) return <h2>No data</h2>
    
    return (
        <Box>
            <SettingsCategoryCreatePage isEdit data={data} />
        </Box>
    )
} 

export default SettingsCategoryEditPage