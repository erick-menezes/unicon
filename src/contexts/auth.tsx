import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { UserSignUpDataType } from "../pages/Register/types";

import { firebaseApp } from "../services/firebase";
import { createUserWithEmailAndPassword, getAuth, User, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { UserRepository } from "../services/firestore/repositories/Users";
import { Timestamp } from "firebase/firestore";

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
    userData: UserDataType | null;
    isAuthenticated: boolean;
}

interface UserDataType {
    courseId: string;
    createdAt: Timestamp;
    disciplines: string[];
    email: string;
    name: string;
    roleId: string;
}

const AuthContext = createContext({} as AuthContextValueType);

const auth = getAuth(firebaseApp);

export function AuthProvider({ children }: AuthProviderProps) {
    const [userAuthSession, setUserAuthSession] = useState<User | null>(null);
    const [userData, setUserData] = useState<UserDataType | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState<ErrorDataType>({ message: '', code: '' });

    useEffect(() => {
        const unsubscribe = getAuth().onAuthStateChanged(async (userSession) => {
            if (userSession) {
                setUserAuthSession(userSession);
                setIsAuthenticated(true);

                const storedUser = await UserRepository.show(userSession.uid) as UserDataType;

                setUserData(storedUser);
            } else {
                setUserAuthSession(null);
                setIsAuthenticated(false);
            }
        });
        
        return unsubscribe;
    }, []);

    function signUpWithEmailAndPassword({ courseId, email, name, password }: UserSignUpDataType) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await UserRepository.store({ 
                    courseId,
                    email, 
                    name, 
                    authUID: user.uid 
                });

                const storedUser = await UserRepository.show(userCredential.user.uid) as UserDataType;

                setUserData(storedUser);
            })
            .catch((error) => {
                setError({ message: error.message, code: error.code });
            });
    }

    function logInWithEmailAndPassword(email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
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