import React from 'react'

export default function TodoList({ owner }) {
  const today = new Date()

  function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
  }

  const tasks = [
    'Improve the videophone',
    'Prepare aeronautics lectures',
    'Work on the alcohol-fuelled engine'
  ]

  return (
    <section>
      <h2>{owner}'s To-Do List for {formatDate(today)}</h2>
      <ul style={{ backgroundColor: 'black', color: 'pink', listStyle: 'circle', padding: '0.75rem 1rem', borderRadius: 8 }}>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </section>
  )
}
