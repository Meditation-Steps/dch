import { useCallback, useEffect, useState } from "react";
import { useTimer } from "../../hooks/useTimer";
import { playNotificationSound } from "../../utils/audio";
import { formatTime } from "../../utils/formatTime";
import TimerControls from "./TimerControls";
import TimerOverlay from "./TimerOverlay";

interface MeditationTimerProps {
  durationMinutes?: number;
}

export default function MeditationTimer({ durationMinutes = 30 }: MeditationTimerProps) {
  const [showControls, setShowControls] = useState(true);

  const handleComplete = useCallback(() => {
    playNotificationSound();
  }, []);

  const { remainingTime, isRunning, progress, start, stop, reset } = useTimer({
    durationMinutes,
    onComplete: handleComplete,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleUserActivity = () => {
      setShowControls(true);

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("click", handleUserActivity);

    // Initial timeout
    timeoutId = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <TimerOverlay progress={progress} />

      <footer
        className="timer-footer"
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1 id="timer-display">{formatTime(remainingTime)}</h1>
        <div
          style={{
            transition: "opacity 0.3s ease",
            opacity: showControls ? 1 : 0,
            pointerEvents: showControls ? "auto" : "none",
          }}
        >
          <TimerControls isRunning={isRunning} onStart={start} onStop={stop} onReset={reset} />
        </div>
      </footer>
    </>
  );
}
