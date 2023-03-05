import React from 'react'

export default function UserDetail({main}) {
  return (
    <div>
      <h2>{main.id}</h2>
      <p>{main.title}</p>
      <p>{main.body}</p>
    </div>
  )
}
