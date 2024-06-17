import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import FiltersCreatePage from "./FiltersCreatePage";
import Loading from "../../components/loading";

const FiltersEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data, loading } = useFetchGetSingleData("filters", id)
    
    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <FiltersCreatePage isEdit data={data} />
        </Box>
    )
} 

export default FiltersEditPage