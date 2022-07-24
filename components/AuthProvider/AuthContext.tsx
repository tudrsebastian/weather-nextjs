import { createContext, useCallback, useContext } from "react"
import useLocalStorage from '../hooks/useLocalStorage'
type Props = {
    children: React.ReactNode;
}
interface User {
    authed: boolean,
    user: string,
}
interface authContextType {
    user: string,
    login: (user: string) => void,
    logout: () => void,
}
const authContextDefault: authContextType = {
    user: '',
    login: (): void => { },
    logout: (): void => { },
}
const AuthContext = createContext<authContextType>(authContextDefault)

const initialUser: User = {
    authed: false,
    user: '',
}
export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useLocalStorage('user', initialUser)

    const login = useCallback((data: string) => {
        setUser({
            authed: true,
            user: data,
        })
    }, [setUser])

    const logout = () => {
        setUser({
            authed: false,
            user: '',
        });
    }
    const value = {
        user,
        login,
        logout
    }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    )
}