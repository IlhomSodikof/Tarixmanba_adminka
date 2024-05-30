import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import useFetchGetSingleData from "../../hooks/useFetchGetSingleData"

const SourceEditPage: React.FC = () => {
    const {id} = useParams()
    if(!id) return (<h2>Nothing Found</h2>)

    const { data } = useFetchGetSingleData("resource", id)
    console.log(data);

    return (
        <Box>{JSON.stringify(data)}</Box>
    )
}

export default SourceEditPage