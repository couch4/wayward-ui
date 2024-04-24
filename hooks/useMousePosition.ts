import { useState, useEffect } from 'react';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    xPct: 0,
    yPct: 0,
  });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      const xPct = event.clientX / window.innerWidth;
      const yPct = event.clientY / window.innerHeight;

      setMousePosition({ x: event.clientX, y: event.clientY, xPct, yPct });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

export default useMousePosition;
