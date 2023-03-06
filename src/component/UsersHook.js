import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UsersHook() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        const controller = new AbortController();
        axios.get('https://jsonplaceholder.typicode.com/users',{signal: controller.signal})
        .then(Response => {setdata(Response.data) })
        .catch(erre => { console.log(erre) })
        
        return () => controller?.abort();
    },[])
    const newlist =data.map(post=><p key={post.id}>{post.name}</p>)
    return (
        <div>
            {newlist}
        </div>
    )
}

export default UsersHook
