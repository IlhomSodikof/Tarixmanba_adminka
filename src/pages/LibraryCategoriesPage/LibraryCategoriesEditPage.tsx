import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingleLibraryCategories } from "../../api/apiGetCalls";

const LibraryCategoriesEditPage: React.FC = () => {
    const id = useLocation().state;

    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        getSingleLibraryCategories(id)
            .then(res => {
                console.log(res.results);
                setData(res.results)
            })
            .catch(err => console.log(err))
            .finally(() => console.log(data))
    })
    
    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}

export default LibraryCategoriesEditPage