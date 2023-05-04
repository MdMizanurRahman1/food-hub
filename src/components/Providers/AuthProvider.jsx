import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);

        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGithub,
        signInWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;