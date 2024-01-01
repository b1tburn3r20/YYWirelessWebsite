import React, { useEffect, useState, useRef } from "react";

const AutoProgressBar = ({
  interval = 10000,
  stepTime = 50,
  onIntervalComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const progressTimer = useRef(null);

  useEffect(() => {
    progressTimer.current = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + (1000 * stepTime) / interval;
        if (newProgress >= 100) {
          clearInterval(progressTimer.current);
          onIntervalComplete && onIntervalComplete();
          return 0;
        }
        return newProgress;
      });
    }, stepTime);

    return () => {
      clearInterval(progressTimer.current);
    };
  }, [interval, stepTime, onIntervalComplete]);

  return (
    <div className="hero-progress-bar-container">
      <div
        className="hero-progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default AutoProgressBar;
