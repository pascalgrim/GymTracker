import React,{useState,useContext,useEffect} from 'react'
import {auth} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState()

    function signup(email,pw){
        return auth.createUserWithEmailAndPassword(email,pw)
    }
    function login(email,pw){
        return auth.signInWithEmailAndPassword(email,pw)
    }
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    const value = {
        currentUser,
        signup,
        login
    }
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    
}

