import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData"
import CreateField from "./components/create"
import Loading from "../../components/loading"

const SourceEditPage: React.FC = () => {
    const {id} = useParams()
    if(!id) return (<h2>Nothing Found</h2>)

    const { data, loading } = useFetchGetSingleData("resource", id)

    console.log(data);
    
    if(loading) return <Loading />
    
    if(!data && !loading) return <h2>No data</h2>

    return (
        <CreateField isEdit data={data} />
    )
}

export default SourceEditPage