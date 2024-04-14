import { Box } from "@mui/material";
import { useUserContext } from "../../context/UserContext"

const Auth: React.FC = () => {
    const {user, setUser} = useUserContext()
    console.log(user);
    
    return (
        <Box>
            
        </Box>
    )
}

export default Auth