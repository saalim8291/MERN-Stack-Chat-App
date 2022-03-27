import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();

    const postDetails = (pics) => {
        
    }

    const submitHandler = () => {

    }

  return (
    <div>Signup
        <form>
            <input placeholder='Enter your name' onChange={(e) => {setName(e.target.value)}} />
            <input placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}} />
            <input placeholder='Enter your password' onChange={(e) => {setPassword(e.target.value)}} />
            <input type="file" onChange={(e) => postDetails(e.target.files[0])} />
            <button type="submit" onClick={submitHandler}>Signup</button>
        </form>
    </div>
  )
}

export default Signup