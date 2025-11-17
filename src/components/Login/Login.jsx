import { useState } from "react"
import { useAuthContext } from '../../context/AuthContext/useAuthContext'
import { Navigate, useNavigate } from "react-router-dom"

export const Login = () => {
    const [userForm, setUserForm] = useState({user:"", password:""})
    const {user, login} = useAuthContext() 

    const navigate = useNavigate()

    if(user){
        return <Navigate to="/admin/alta-productos"/>
    }
    const handlechange = (e) => {
        const {name, value} = e.target
        setUserForm({...userForm, [name]:value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const success = login(userForm.name, userForm.password)
        if(success){
            navigate("/admin/alta-productos")
        }else{
            alert("Nombre o contraseña incorrecto/a")
            setUserForm({ user:"", password:"" })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div>
                <label htmlFor="name">Usuario:</label>
                <input type="text" name="name" value={userForm.name} onChange={handlechange}/>
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" name="password" value={userForm.password} onChange={handlechange}/>
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
    )
}