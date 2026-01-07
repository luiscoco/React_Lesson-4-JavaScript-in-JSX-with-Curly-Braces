# React 19.2 - Lesson 4 - JSX Curly Demo (React 19 + Vite)

https://stackblitz.com/github/luiscoco/React_Lesson-4-JavaScript-in-JSX-with-Curly-Braces

A tiny app to practice **JavaScript in JSX with curly braces**. It renders a themed dashboard, a profile card, and a todo list while showcasing expressions, objects, lists, and inline styles in JSX.

## Demo

<img width="1355" height="959" alt="image" src="https://github.com/user-attachments/assets/9a43b0df-7cd4-4243-8e28-bccccd224da8" />

## Features (with snippets)

- Variables and expressions inside JSX text

```jsx
const greeting = person.name ? `Hello, ${person.name.split(' ')[0]}!` : 'Hello!'
<p className="note">{greeting}</p>
```

- Dynamic attributes and inline styles

```jsx
<img
  src={avatar}
  alt={name}
  style={imgStyle}
/>
```

- Lists and function calls inside JSX

```jsx
<h2>{owner}'s To-Do List for {formatDate(today)}</h2>
{tasks.map((task, i) => (
  <li key={i}>{task}</li>
))}
```

- Inline style objects (double curlies)

```jsx
<div style={{ marginTop: '1rem', borderTop: '1px dashed currentColor' }}>
  ...
</div>
```

## How to run

```bash
npm install
npm run dev
```

Then open the displayed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## File purposes

- `README.md` - project overview, features, and usage
- `index.html` - HTML entry point that mounts the React app into `#root`
- `package.json` - project metadata, scripts, and dependencies
- `vite.config.js` - Vite configuration with the React plugin
- `src/main.jsx` - React entry point that renders `App` into the DOM
- `src/App.jsx` - main UI composed of JSX curly-brace examples
- `src/index.css` - global styles and layout styling
- `src/components/PersonCard.jsx` - profile card with dynamic props and styles
- `src/components/TodoList.jsx` - list rendering with a formatted date
