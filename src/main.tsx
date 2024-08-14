import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import InvertedCursor from './styled_components/InvertedCursor.tsx'

// js to invert colors under cursor and also make it "lag"
let cursorX = 0, cursorY = 0;
let circleX = 0, circleY = 0;
const speed = 0.2; // lag speed

document.body.onmousemove = function(e) {
  cursorX = e.clientX + window.scrollX;
  cursorY = e.clientY + window.scrollY;
};

function animate() {
  // calculate the distance between the cursor and the circle
  circleX += (cursorX - circleX) * speed;
  circleY += (cursorY - circleY) * speed;

  // update the CSS variables to move the circle
  document.documentElement.style.setProperty('--x', `${circleX}px`);
  document.documentElement.style.setProperty('--y', `${circleY}px`);

  // continue the animation loop
  requestAnimationFrame(animate);
}

// start the animation loop
animate();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <InvertedCursor />
    <App />
  </React.StrictMode>,
)
