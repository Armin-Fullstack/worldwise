import { useNavigate } from "react-router-dom"
import { useUserAuth } from "../contexts/UserAuthProvider"
import { useEffect } from "react"

export default function ProtectedRoutes({children}) {
  const {isAuthenticated} = useUserAuth()
  const navigate = useNavigate()

  useEffect(() => {
    !isAuthenticated && navigate("/")
  } , [isAuthenticated , navigate])

  return isAuthenticated ? children : null
}