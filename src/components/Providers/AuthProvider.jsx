import React, { createContext, useEffect, useState } from 'react';

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        return signOut(auth)
    }


    const signInWithGithub = () => {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);

        })
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user,
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