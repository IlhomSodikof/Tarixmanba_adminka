import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import UILink from "../../ui-components/link";
import { CustomAppBar, CustomLogoutBox } from './custom.style';
import { links } from './link';
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

interface props {
    active: boolean
}

const Sidebar: React.FC<props> = ({active}) => {
    const {setUser} = useUserContext()
    
    const navigate = useNavigate()
    
    const linksResult = links.map(link => {
        return (
            <UILink
                key={link.text}
                active={active} 
                text={link.text}
                to={link.to}
                Icon={link.Icon}
            />
        )
    })

    const logOut = () => {
        setUser({email: ""})
        localStorage.setItem("user", "")
        navigate("/login", {replace: true})
    }

    return (
        <CustomAppBar 
            position="fixed"
            sx={{
                width: active ? "270px" : "60px"
            }}    
        >
            {linksResult}
            <CustomLogoutBox>
                <Button variant="contained" fullWidth onClick={logOut} sx={{
                    margin: "0 20px"
                }}>
                    <LogoutIcon />
                </Button>
            </CustomLogoutBox>
        </CustomAppBar>
    )
}

export default Sidebar