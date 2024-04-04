import { Box, Popper, Typography } from "@mui/material"

interface props {
    Icon: any,
    text: string,
    open: null | HTMLElement
}

const HoverPopUp: React.FC<props> = ({Icon, text, open}) => {
    return (
        <Box sx={{
            position: "relative"
        }}>
            <Popper 
                open={Boolean(open)}
                id={"mouse-over-popover"}
                anchorEl={open}
                placement="right"
                // modifiers={[
                //     {
                //         name: 'arrow',
                //         enabled: true,
                //         options: {
                //             element: open,
                //         },
                //     },
                // ]}
                sx={{
                    backgroundColor: "primary.dark",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "#fff",
                    height: "40px",
                    padding: "0 5px",
                    transition: "0.4s ease",
                    marginLeft: "5px"
                }}  
            >
                <Icon />
                <Typography>{text}</Typography>
            </Popper>
        </Box>
    )
}

export default HoverPopUp