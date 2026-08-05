import { useState } from "react"

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Email: ${email}`)
        console.log("Password: " + password)
    }
  return (
    <div>
        <h1>SignUpForm</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="youremail@example.com" onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SignUpForm