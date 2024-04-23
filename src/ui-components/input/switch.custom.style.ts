import { Switch, styled } from "@mui/material";

export const CustomSwitch = styled(Switch)(({theme}) => ({
    width: 35,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 19,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(11px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2.5,
        '&.Mui-checked': {
            transform: 'translateX(15px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#1890ff',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 15,
        height: 15,
        borderRadius: 20,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 10,
        opacity: 1,
        backgroundColor: 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}))