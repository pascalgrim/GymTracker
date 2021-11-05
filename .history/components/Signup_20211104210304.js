import React from 'react'
import {Card, Button, TextField,Alert} from 'react-native-paper';
import { useRef ,useState} from 'react'
import { Link,Route,BrowserRouter as Router,Routes } from 'react-router-dom'
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
        <div className="w-100" style={{maxWidth:"400px",color:"white"}}>
        <Card style={{backgroundColor:"transparent",border:"2px solid white",backdropFilter:"blur(5px)"}}>
    
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        
        </Card>
        <div className="w-100 text-center mt-2">
            <Router>
            <Routes>
            <Route>
            Du hast schon einen Account? <Link to="/login" className="text-decoration-none text-warning">Einloggen</Link>
            </Route>
            </Routes>
            </Router>
           
            
        
        </div>
        </div>
        
    )
}
