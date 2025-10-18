import { useEffect, useState } from "react";

export function useCounterAnimation(target: number, duration: number = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    let frame: number;

    function animate() {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(target);
        cancelAnimationFrame(frame);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return count;
}
