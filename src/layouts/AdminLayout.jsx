import { Outlet } from 'react-router-dom'

export const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <h3>ESTA PÁGINA SÓLO ES VISIBLE COMO ADMINISTRADOR</h3>
            <Outlet/>
        </div>
        )
}