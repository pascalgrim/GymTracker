import React from 'react'
import {Card, Button,TextField,Alert} from 'react-native-paper';
import { useRef ,useState} from 'react'
import { Link,Route,BrowserRouter as Router,Routes } from 'react-router-dom';
// import Button from '@mui/material/Button';
import {useAuth} from "../context/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const signup = useAuth()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    
    async function handleSubmit(e){
        e.preventDefault()
        console.log((passwordRef.current.value).length)

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match.")
        }
        else if ((passwordRef.current.value).length < 6){
            return setError("Passwords must have at least 6 characters.")
        }
        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push("/")
        }catch{
            setError("Failed to create an Account.")
        }
        setLoading(false)

        
    }
    return (
        <div>
        <Button variant="contained">Hello World</Button>;
        <Card>aishdahsd</Card>
        
        </div>
        
    )
}
