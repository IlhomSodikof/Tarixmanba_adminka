import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import LibrariesCreatePage from "./LibrariesCreatePage";

const LibrariesEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data } = useFetchGetSingleData("libraries", id)
    
    if(!data) return <h2>No data</h2>
    
    return (
        <Box>
            <LibrariesCreatePage isEdit data={data} />
        </Box>
    )
} 

export default LibrariesEditPage