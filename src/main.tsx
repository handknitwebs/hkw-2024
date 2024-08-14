import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InvertedCursor from './styled_components/InvertedCursor.tsx'

// js to invert colors under cursor
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InvertedCursor />
    <App />
  </React.StrictMode>,
)
