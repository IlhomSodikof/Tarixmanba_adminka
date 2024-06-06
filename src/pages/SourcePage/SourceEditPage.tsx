import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData"
import CreateField from "./components/create"

const SourceEditPage: React.FC = () => {
    const {id} = useParams()
    if(!id) return (<h2>Nothing Found</h2>)

    const { data } = useFetchGetSingleData("resource", id)

    if(!data) return <h2>No data</h2>

    return (
        <CreateField isEdit data={data} />
    )
}

export default SourceEditPage