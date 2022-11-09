import { createContext, ReactNode, useContext } from "react";

import { firebaseApp } from "../services/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

interface AuthProviderProps {
    children: ReactNode;
}

// interface UserSessionDataType {
//     name: string;
//     email: string;
//     profileImage: string;
//     role: string;
// }

interface AuthContextValueType {
    signUpWithEmailAndPassword: (email: string, password: string) => void;
}

const AuthContext = createContext({} as AuthContextValueType);

export function AuthProvider({ children }: AuthProviderProps) {
    // const [userSessionData, setUserSessionData] = useState({} as UserSessionDataType);

    function signUpWithEmailAndPassword(email: string, password: string) {
        const auth = getAuth(firebaseApp);
            
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('user', user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode', errorCode);
                console.log('errorMessage', errorMessage);
            });
    }

    return (
        <AuthContext.Provider value={{ signUpWithEmailAndPassword }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const auth = useContext(AuthContext);

    return auth;
}