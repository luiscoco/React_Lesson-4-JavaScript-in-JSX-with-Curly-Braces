import React from 'react'
import TodoList from './components/TodoList.jsx'
import PersonCard from './components/PersonCard.jsx'

export default function App() {
  const person = {
    name: 'Gregorio Y. Zara',
    avatar: 'https://i.imgur.com/7vQD0fPs.jpg',
    theme: {
      // Double curlies: one for JSX, one for the object literal.
      backgroundColor: 'black',
      color: 'pink',
      padding: '1rem',
      borderRadius: '12px'
    }
  }

  // Example: dynamic expression in JSX (ternary)
  const greeting = person.name ? `Hello, ${person.name.split(' ')[0]}!` : 'Hello!'

  return (
    <div style={person.theme}>
      {/* Curly braces in text content */}
      <h1>{person.name}'s Dashboard</h1>

      {/* Curly braces in attribute values */}
      <PersonCard name={person.name} avatar={person.avatar} />

      {/* Curly braces for expressions */}
      <p className="note">{greeting}</p>

      {/* List component showing map() with curly braces */}
      <TodoList owner={person.name} />

      {/* Example: inline object literal with double curlies */}
      <div style={{ marginTop: '1rem', borderTop: '1px dashed currentColor', paddingTop: '1rem' }}>
        <p>
          Try editing the code and see the UI update instantly.
        </p>
        <p>
          <strong>Recap:</strong> Use quotes for static strings, and {'{ ... }'} for JavaScript.
        </p>
      </div>
    </div>
  )
}
