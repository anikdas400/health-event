import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoding]=useState(true)

    // createUser
    const createUser =(email,password)=>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // signInUser
    const signInUser = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // signOut
    const logOut = ()=>{
        setLoding(true)
       return signOut(auth)
    }
    //onAuthStateChanged 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoding(false)
            // console.log("observing currentUser",currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes={
    children:PropTypes.node
}