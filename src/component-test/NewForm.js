import React, { useEffect, useState } from 'react'

function NewForm() {
    let i =0
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [date, setdate] = useState("")
    const [count, setcount] = useState(i-2)


    useEffect(() => {
        setcount((pre)=>pre+1)
       
    }, [username, email, phone, date])
    return (
        <div>
            <section>

                <label htmlFor="username">Username:</label>
                <input type="text" onChange={(e) =>setusername({username:e.target.value})} />

                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) =>setemail({email:e.target.value})} />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" onChange={(e) => setphone({phone:e.target.value})} />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" onChange={(e) =>  setdate({date:e.target.value})} />

                <div>{count}</div>
            </section>
        </div>
    )
}

export default NewForm
