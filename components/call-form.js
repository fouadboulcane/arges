import React, { useState } from 'react'

const CallForm = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [subject, setSubject] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ "name": name, "phoneNumber": phoneNumber, "subject": subject })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="columns">
                <div className="control column is-half">
                    <input className="input" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="control column is-half">
                    <input className="input" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
            </div>
            <div className="columns">
                <div className="control column is-half">
                    <input className="input" type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className="column">
                    <button className="button is-success" type="submit">SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default CallForm