
import React, { useState } from 'react'

const SignUp = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user' + email + ' successfully signed up')
    }

    return (
        <form className="is-flex mt-4" onSubmit={handleSubmit}>
            <div className="control is-flex-grow-1">
                <input className="input is-hovered" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="button is-success" type="submit">SUBSCRIBE</button>
        </form>
    )
}

export default SignUp