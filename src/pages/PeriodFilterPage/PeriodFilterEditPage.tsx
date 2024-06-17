import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData";
import { Box } from "@mui/material";
import PeriodFilterCreatePage from "./PeriodFilterCreatePage";
import Loading from "../../components/loading";

const ArticlesEditPage: React.FC = () => {
    const { id } = useParams()
    if(!id) return <h2>Nothing Found</h2>

    const { data, loading } = useFetchGetSingleData("period_filter", id)
    
    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>
    
    return (
        <Box>
            <PeriodFilterCreatePage isEdit data={data} />
        </Box>
    )
} 

export default ArticlesEditPage