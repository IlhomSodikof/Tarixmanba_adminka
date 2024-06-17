import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import FilterCategoriesCreatePage from "./FilterCategoriesCreatePage";
import Loading from "../../components/loading";

const FiltercategoriesEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data, loading } = useFetchGetSingleData("filter_category", id)

    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <FilterCategoriesCreatePage isEdit data={data} />
        </Box>
    )
} 

export default FiltercategoriesEditPage