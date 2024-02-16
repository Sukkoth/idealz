import { useAuth } from '../../Providers/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

function AuthOutlet() {
    const { user } = useAuth()
    console.log('🚀 ~ AuthOutlet ~ user:', user)

    if (!user) return <Navigate to={'/auth'} />
    return <Outlet />
}

export default AuthOutlet
