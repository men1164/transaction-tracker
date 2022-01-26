import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { projectAuth } from "../firebase/config"

const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)

    try {
      const res = await createUserWithEmailAndPassword(projectAuth, email, password)
      console.log(res.user)
      if(!res) {
        throw new Error('Could not signup with email and password')
      }
      await updateProfile(res.user, { displayName })
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