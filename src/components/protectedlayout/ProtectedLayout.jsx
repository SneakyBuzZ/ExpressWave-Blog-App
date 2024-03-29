import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function ProtectedLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.user.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/account")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authentication, authStatus, navigate])

    return loader ? <h1>...loading</h1> : <>{children}</>
}

export default ProtectedLayout
