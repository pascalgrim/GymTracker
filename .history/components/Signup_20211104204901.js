import React from 'react'
import {Card, Button, Form,Alert} from 'react-bootstrap'
import { useRef ,useState} from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from "../context/AuthContext"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory()
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
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <h2 className="text-center m-4">Sign Up</h2>
                    {error && <Alert variant="danger" className="m-4">{error}</Alert>}
                    <Form.Group id = "email" className="m-4">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id = "password" className="m-4">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id = "password-confirmation" className="m-4">
                        <Form.Label>Passwort bestätigen</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required />
                    </Form.Group>
                    <div className="m-4">
                    <Button variant="success" type="submit" className="w-100 mt-3" disabled={loading}>Sign Up</Button>
                    </div>
                   
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Du hast schon einen Account? <Link to="/login" className="text-decoration-none text-warning">Einloggen</Link>
        </div>
        </div>
        
    )
}
