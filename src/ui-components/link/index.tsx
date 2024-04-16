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
            sx={{
                backgroundColor: act ? "primary.main" : "transparent",
                padding: active ? "0 24px" : "0",
                width: active ? "100%" : "60px",
            }}
            >
            <RouterLink to={to} style={{
                justifyContent: active ? "flex-start" : "center",
                color: act ? "#fff" : "primary.light",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                height: "100%",
            }}>
                <Icon />
                {!active && (<HoverPopUp Icon={Icon} text={text} open={anchorEl} />)}
                {active && (<Typography>{text}</Typography>)}
            </RouterLink>
        </CustomLink>
    )
}

export default UILink