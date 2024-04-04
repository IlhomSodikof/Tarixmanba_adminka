import { ReactElement, useState } from "react"
import { Stack } from "@mui/material"
import Sidebar from "../components/sidebar"
import { CustomAppBox, CustomAppContainer } from "./custom.style"
import Navbar from "../components/nav"
import { useLocation } from "react-router-dom"

interface props {
    children: ReactElement,
}

const Layout: React.FC<props> = ({children}) => {
    const {pathname} = useLocation()

    const [active, setActive] = useState<boolean>(true)
    
    if(pathname === "/login") return children
    return (
        <Stack direction={"row"}>
            <Sidebar active={active} />
            <CustomAppBox>
                <Navbar disableActive={(e: boolean) => setActive(e)} active={active} />
                <CustomAppContainer maxWidth="xl">
                    {children}
                </CustomAppContainer>
            </CustomAppBox>
        </Stack>
    )
}

export default Layout