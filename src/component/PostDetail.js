import axios from "axios";
import React, { useEffect, useState } from "react";

function PostDetail() {
  const [data, setdata] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((Response) => {
        setdata(Response.data);
      })
      .catch((erre) => {
        console.log(erre);
      });

 
  }, [id]);
  console.log(data);

return (<>
  <div>
    <input type="number" onChange={(e) => setId(e.target.value)}></input>
  </div>
    <p>{data.id}</p>
    <p>{data.title}</p>
    <p>{data.body}</p>
    </>
);
}
export default PostDetail;
