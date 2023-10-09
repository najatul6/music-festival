import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    };

    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;