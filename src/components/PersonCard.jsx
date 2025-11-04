import React from 'react'

export default function PersonCard({ name, avatar }) {
  const imgStyle = { borderRadius: '50%', width: 150, height: 150, objectFit: 'cover' }

  return (
    <div className="card">
      <img
        className="avatar"
        src={avatar}       // dynamic attribute via curly braces
        alt={name}         // dynamic alt text
        style={imgStyle}   // object passed with double curlies at callsite
      />
      <p>Hello, {name}!</p>
    </div>
  )
}
