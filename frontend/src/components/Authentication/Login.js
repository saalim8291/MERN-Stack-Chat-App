import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const postDetails = (pics) => {
        
    }

    const submitHandler = () => {

    }

  return (
    <div>Signup
        <form>
            <input placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}} />
            <input placeholder='Enter your password' onChange={(e) => {setPassword(e.target.value)}} />
            <button type="submit" onClick={submitHandler}>Login</button>
        </form>
    </div>
  )
}

export default Signup