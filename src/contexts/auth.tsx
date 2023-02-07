import { createContext, MutableRefObject, ReactNode, useContext, useEffect, useRef, useState } from "react";

import { getUserAccount } from "../services/firestore/use-cases/users/get-user-account";
import { registerAccount } from "../services/firestore/use-cases/users/register-account";

import { UserSignUpDataType } from "../pages/Register/types";

import { firebaseApp } from "../services/firebase";
import { User as UserData } from "../services/database/models/user";
import {
    createUserWithEmailAndPassword,
    getAuth,
    User,
    signOut,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence
} from "firebase/auth";

interface AuthProviderProps {
    children: ReactNode;
}

interface ErrorDataType {
    message: string;
    code: string;
}

interface AuthContextValueType {
    error: ErrorDataType;
    signUpWithEmailAndPassword: (user: UserSignUpDataType) => void;
    logInWithEmailAndPassword: (email: string, password: string) => void;
    logout: () => void;
    userAuthSession: User | null;
    userData: UserData | null;
    isAuthenticated: MutableRefObject<boolean>;
}

const AuthContext = createContext({} as AuthContextValueType);

const auth = getAuth(firebaseApp);

export function AuthProvider({ children }: AuthProviderProps) {
    const [userAuthSession, setUserAuthSession] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserData | null>(null);
    const isAuthenticated = useRef(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<ErrorDataType>({ message: '', code: '' });

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged(async (userSession) => {
            if (userSession) {
                setUserAuthSession(userSession);
                // setIsAuthenticated(true);
                isAuthenticated.current = true;

                const { user } = await getUserAccount(userSession.uid, "authUID");

                setUserData(user);
            } else {
                setUserAuthSession(null);
                // setIsAuthenticated(false);
                isAuthenticated.current = false
            }
        });

        return unsubscribe;
    }, []);

    function signUpWithEmailAndPassword({ courseId, email, name, password }: UserSignUpDataType) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await registerAccount({
                    courseId,
                    email,
                    name,
                    authUID: user.uid
                });

                const { user: userData } = await getUserAccount(userCredential.user.uid, "authUID");

                setUserData(userData);
            })
            .catch((error) => {
                setError({ message: error.message, code: error.code });
            });
    }

    function logInWithEmailAndPassword(email: string, password: string) {
        setPersistence(auth, browserLocalPersistence).then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        }).catch((error) => {
            setError({ message: error.message, code: error.code });
        });
    }

    function logout() {
        signOut(auth);
    }

    return (
        <AuthContext.Provider
            value={{
                signUpWithEmailAndPassword,
                logInWithEmailAndPassword,
                logout,
                userAuthSession,
                userData,
                isAuthenticated,
                error,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const auth = useContext(AuthContext);

    return auth;
}
