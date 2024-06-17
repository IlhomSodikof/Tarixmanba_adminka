import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import LibrariesCreatePage from "./LibrariesCreatePage";
import Loading from "../../components/loading";

const LibrariesEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data, loading } = useFetchGetSingleData("libraries", id)
    
    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <LibrariesCreatePage isEdit data={data} />
        </Box>
    )
} 

export default LibrariesEditPage