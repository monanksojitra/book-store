import React, { useCallback, useState } from 'react'

function RegisterUser() {
    const [user, setUser] = useState({
        username: "none",
        email: "none",
        phone: "none",
        date: "none"
    })
    const update = useCallback(() => {
        setUser({
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('dob').value
        })
    }, [user.username, user.email, user.phone, user.date])


    return (
        <section>

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" />

            <button onClick={update}> Submit </button>

        </section>

    )
}

export default RegisterUser
