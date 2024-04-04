import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContext {
    user: {email: string},
    setUser: Dispatch<SetStateAction<{email: string}>>
}

interface UserType {
    email: string
}

export const UserContext = createContext<UserContext>({
    user: {
        email: "user@gmail.com"
    },
    setUser: function (value: SetStateAction<Object>): void {
        console.log(value);
        throw new Error("Function not implemented.");
    }
})

export default function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<UserType>({email: ""});
 
    return (
        <UserContext.Provider
            value={{
            user,
            setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);
    if (context === undefined || context === null)
        throw new Error("filter context is not working or undefined");
    return context;
}