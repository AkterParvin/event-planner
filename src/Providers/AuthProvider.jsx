/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

   
    const [newUser, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    

    // for register new user 
    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
   


    // for login registered user 
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logOut function
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    // for user-status change observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Showing user status from useEffect ', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, []);

    // for login with google 
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = (result.user);
                setUser(user);
                console.log(user);
               
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    


    const authInfo = { newUser, creatUser, loginUser, logOut, loading, googleSignIn };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;