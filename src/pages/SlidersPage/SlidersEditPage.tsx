import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import SlidersCreatePage from "./SlidersCreatePage";

const ArticlesEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data } = useFetchGetSingleData("sliders", id)
    
    if(!data) return <h2>No data</h2>
    
    return (
        <Box>
            <SlidersCreatePage isEdit data={data} />
        </Box>
    )
} 

export default ArticlesEditPage