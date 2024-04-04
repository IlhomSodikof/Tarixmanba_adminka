import { ReactElement, Suspense } from "react"
import { useUserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"
import Loading from "../components/loading"
import Layout from "../layout"

interface props {
    children: ReactElement
}

const ProtectedRoute: React.FC<props> = ({children}) => {
    const {user} = useUserContext()
    if(!user.email) {
        return (
            <Navigate to={"/login"} />
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            <Layout>
                {children}
            </Layout>
        </Suspense>
    )
}

export default ProtectedRoute