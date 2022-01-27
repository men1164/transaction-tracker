import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "../hooks/useAuthContext"

const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await createUserWithEmailAndPassword(projectAuth, email, password)
      if(!res) {
        throw new Error('Could not signup with email and password')
      }
      await updateProfile(res.user, { displayName })
      dispatch({ type: 'LOGIN', payload: res.user })
      setError(null)
      setIsPending(false)
    }
    catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}

export default useSignup