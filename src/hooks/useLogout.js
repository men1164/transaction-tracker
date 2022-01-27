import { signOut } from "firebase/auth"
import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsPending(true)

    try {
      await signOut(projectAuth)
      dispatch({ type: 'LOGOUT' })
      setIsPending(false)
      setError(null)
    }
    catch(err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { logout, isPending, error }
}

export default useLogout