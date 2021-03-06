import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { error, isPending, signup } = useSignup()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password, displayName)
    if(!error) {
      history.push('/')
    }
  }

  return (
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>Display Name:</span>
        <input type="text" onChange={e => setDisplayName(e.target.value)} value={displayName} />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn" disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}
