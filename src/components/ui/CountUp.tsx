import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  end: number;
  duration?: number; // ms
  className?: string;
}

export default function CountUp({ end, duration = 1200, className = "" }: CountUpProps) {
  const [value, setValue] = useState(0);
  const start = useRef(0);
  useEffect(() => {
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * (end - start.current) + start.current));
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(end);
    }
    requestAnimationFrame(animate);
    return () => { start.current = value; };
    // eslint-disable-next-line
  }, [end, duration]);
  return <span className={className}>{value.toLocaleString()}</span>;
}
