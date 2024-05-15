import { useParams } from "react-router-dom"

const CategoriesEditPage: React.FC = () => {
    const data = useParams()
    console.log(data.id);
    
    return (
        <>Edit</>
    )
}

export default CategoriesEditPage