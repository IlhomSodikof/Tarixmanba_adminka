import { Link as RouterLink, useLocation } from "react-router-dom"
import { CustomLink } from "./custom.style"
import { useEffect, useState } from "react"
import HoverPopUp from "./hoverPopUp"
import { Typography } from "@mui/material"

interface props {
    to: string,
    text: string,
    Icon: any,
    active: boolean
}

const UILink: React.FC<props> = ({to, text, Icon, active}) => {
    const {pathname} = useLocation()
    useEffect(() => {
        pathname.includes(to) ? setAct(true) : setAct(false)
    }, [pathname])
    
    const [act, setAct] = useState<boolean>(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    

    return (
        <CustomLink
            onMouseOver={handleClick}
            onMouseLeave={() => setAnchorEl(null)}
            component={RouterLink}
            to={to}
            underline="none"
            sx={{
                backgroundColor: act ? "primary.main" : "transparent",
                color: act ? "#fff" : "primary.light",
                padding: active ? "0 24px" : "0",
                width: active ? "100%" : "60px",
                justifyContent: active ? "flex-start" : "center"
            }}
        >
            <Icon />
            {!active && (<HoverPopUp Icon={Icon} text={text} open={anchorEl} />)}
            {active && (<Typography>{text}</Typography>)}
        </CustomLink>
    )
}

export default UILink