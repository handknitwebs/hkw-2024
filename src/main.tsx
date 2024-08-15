import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import InvertedCursor from './styled_components/InvertedCursor.tsx';

const CursorFollower = () => {
  let cursorX = 0, cursorY = 0;
  let circleX = 0, circleY = 0;
  const speed = 0.1;

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      console.log('hover')
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const animate = () => {
      // Smoothly move the circle towards the cursor position
      circleX += (cursorX - circleX) * speed;
      circleY += (cursorY + window.scrollY - circleY) * speed;

      // Update CSS variables to move the circle
      document.documentElement.style.setProperty('--x', `${circleX}px`);
      document.documentElement.style.setProperty('--y', `${circleY}px`);

      // Continue the animation loop
      requestAnimationFrame(animate);
    };

    // Attach event listeners
    document.body.addEventListener('mousemove', updateCursorPosition);

    // Add hover event listeners to elements with the class "action"
    const actionElements = document.querySelectorAll('.action');
    actionElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Start the animation loop
    animate();

    // Cleanup event listeners on unmount
    return () => {
      document.body.removeEventListener('mousemove', updateCursorPosition);
      actionElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <InvertedCursor isHovered={isHovered} />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CursorFollower />
    <App />
  </React.StrictMode>,
);
