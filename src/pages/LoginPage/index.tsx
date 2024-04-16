import Auth from "../../components/auth"
import { useUserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const LoginPage: React.FC = () => {
    const {user} = useUserContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(user.email && user.email?.length > 0) navigate("/", {replace: true})
    }, [])


    return (
        <Auth />
    )
}

export default LoginPage