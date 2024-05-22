import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getSingleData } from "../../api/apiGetSingleData";

const LibraryCategoriesEditPage: React.FC = () => {
    const id = useLocation().state;

    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        getSingleData("library_category", id)
            .then((res: any) => {
                setData(res.results)
            })
            .catch((err: any) => err)
    })
    
    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}

export default LibraryCategoriesEditPage