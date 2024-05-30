import { useLocation } from "react-router-dom";
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import LibraryCategoriesCreatePage from "./LibraryCategoriesCreatePage";

const LibraryCategoriesEditPage: React.FC = () => {
    const id = useLocation().state;

    const {data} = useFetchGetSingleData("library-categories", id)
    console.log(data);

    if(!data) return <h2>No data</h2>
    
    return (
        <Box>
            <LibraryCategoriesCreatePage isEdit data={data} />
        </Box>
    )
}

export default LibraryCategoriesEditPage