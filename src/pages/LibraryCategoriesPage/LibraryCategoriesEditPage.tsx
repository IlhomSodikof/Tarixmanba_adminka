import { useLocation } from "react-router-dom";
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import LibraryCategoriesCreatePage from "./LibraryCategoriesCreatePage";
import Loading from "../../components/loading";

const LibraryCategoriesEditPage: React.FC = () => {
    const id = useLocation().state;

    const {data, loading} = useFetchGetSingleData("library-categories", id)

    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <LibraryCategoriesCreatePage isEdit data={data} />
        </Box>
    )
}

export default LibraryCategoriesEditPage