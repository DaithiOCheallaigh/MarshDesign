import React from 'react'
import ReactDOM from 'react-dom/client'
import './tokens'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: 40 }}>
      <h1>Marsh Design System</h1>
      <p>Run <code>npm run storybook</code> to view components.</p>
    </div>
  </React.StrictMode>,
)
