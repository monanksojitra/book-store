import React from 'react'

export default function UserDetail({main}) {
  return (
    <div>
      <h2>{main.id}</h2>
      <p>{main.name}</p>
      <p>{main.email}</p>
      <p>{main.phone}</p>
      <p>{main.website}</p>
      <p>{main.address.street}</p>
    </div>
  )
}
