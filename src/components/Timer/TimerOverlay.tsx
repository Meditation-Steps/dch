interface TimerOverlayProps {
  progress: number;
}

export default function TimerOverlay({ progress }: TimerOverlayProps) {
  return (
    <div
      className="timer-overlay"
      style={{
        display: "none", // requested from Didi
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: `${progress}%`,
        backgroundColor: "rgba(235, 119, 61, 0.5)",
        transition: "height 0.3s ease-out",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
