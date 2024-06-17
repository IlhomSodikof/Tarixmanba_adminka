import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import SettingsCategoryCreatePage from "./SettingsCategoryCreatePage";
import Loading from "../../components/loading";

const SettingsCategoryEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data, loading } = useFetchGetSingleData("connection_category", id)
    
    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <SettingsCategoryCreatePage isEdit data={data} />
        </Box>
    )
} 

export default SettingsCategoryEditPage