import { useAuthContext } from '../../context/AuthContext/useAuthContext'
import { Navigate } from 'react-router-dom'

export const RutaProtegida = ({ children }) => {
    const {user} = useAuthContext()
    if (!user){
        //console.log("se protegió la ruta /admin/alta-productos por no haber ingresado mediante sistema de Login")
        return <Navigate to="/" replace />
    }
    return children
}