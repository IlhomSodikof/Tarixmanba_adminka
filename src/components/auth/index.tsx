import { Box, Button, FormControl, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useUserContext } from "../../context/UserContext"
import { CustomBox, CustomInnerBox } from "./custom.style";
import UIInput from "../../ui-components/input/input";
import { ChangeEvent, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Auth: React.FC = () => {
    const {user, setUser} = useUserContext()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const submit = () => {
        if(!email || !password) return
        setUser({email})
        localStorage.setItem("user", email)
    }

    return (
        <CustomBox>
            <CustomInnerBox>
                <Typography sx={{fontWeight: "600", fontSize: "30px"}}>Admin Panel</Typography>
                <FormControl fullWidth>
                    <Box sx={{
                        display: "flex",
                        gap: "10px",
                        margin: "20px 0 5px"
                    }}>
                        <Typography sx={{color: "red"}}>*</Typography>
                        <Typography>Login</Typography>
                    </Box>
                    <UIInput updateValue={e => setEmail(e)} type="email" />
                    <Box sx={{
                        display: "flex",
                        gap: "10px",
                        margin: "20px 0 5px"
                    }}>
                        <Typography sx={{color: "red"}}>*</Typography>
                        <Typography>Password</Typography>
                    </Box>
                    <TextField 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                    <Button variant="contained" sx={{marginTop: "30px"}} onClick={submit}>Login</Button>
                </FormControl>
            </CustomInnerBox>
        </CustomBox>
    )
}

export default Auth