import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface UserContextProviderProps {
    children: ReactNode
}

interface UserContextType {
    user: {email: string | null},
    setUser: Dispatch<SetStateAction<{email: string | null}>>
}

interface UserType {
    email: string | null
}
export const UserContext = createContext<UserContextType | undefined>(undefined)

export default function UserContextProvider({children}: UserContextProviderProps) {
    const [user, setUser] = useState<UserType>({email: localStorage.getItem("user") || "user@gmail.com"});
 
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