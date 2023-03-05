import React from 'react'

export default function UserDetail({main}) {
  return (
    <div>
      <h2>{main.id}</h2>
      <p>{main.name}</p>
      <p>{main.email}</p>
      <p>{main.address.street}</p>
    </div>
  )
}
