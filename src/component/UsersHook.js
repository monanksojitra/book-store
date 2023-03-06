import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UsersHook() {
    const [data, setdata] = useState([])
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(Response => {setdata(Response.data) })
            .catch(erre => { console.log(erre) })
    },[])
    const newlist =data.map(post=><p>{post.name}</p>)
    return (
        <div>
            {newlist}
        </div>
    )
}

export default UsersHook
