import { Button, Typography } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import UILink from "../../ui-components/link";
import { CustomAppBar, CustomLogoutBox } from './custom.style';
import { links } from './link';

interface props {
    active: boolean
}

const Sidebar: React.FC<props> = ({active}) => {
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

    return (
        <CustomAppBar 
            position="fixed"
            sx={{
                width: active ? "270px" : "60px"
            }}    
        >
            {linksResult}
            <CustomLogoutBox>
                <Button variant="contained" fullWidth sx={{
                    margin: "0 20px"
                }}>
                    <Typography>Log Out </Typography>
                    <LogoutIcon />
                </Button>
            </CustomLogoutBox>
        </CustomAppBar>
    )
}

export default Sidebar