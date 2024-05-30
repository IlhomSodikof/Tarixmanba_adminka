import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import FiltersCreatePage from "./FiltersCreatePage";

const FiltersEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data } = useFetchGetSingleData("filters", id)
    
    if(!data) return <h2>No data</h2>
    
    console.log(data);
    
    return (
        <Box>
            <FiltersCreatePage isEdit data={data} />
        </Box>
    )
} 

export default FiltersEditPage