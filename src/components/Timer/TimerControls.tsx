import { useTranslation } from "react-i18next";
import "../../styles/buttons.css";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

export default function TimerControls({ isRunning, onStart, onStop, onReset }: TimerControlsProps) {
  const { t } = useTranslation("timer");

  return (
    <div
      className="timer-controls"
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {isRunning ? (
        <button
          id="stop-btn"
          className="timer-button"
          onClick={onStop}
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/images/stop.png" alt="" style={{ width: "32px", height: "32px" }} />
          {t("stop")}
        </button>
      ) : (
        <button
          id="start-btn"
          className="timer-button"
          onClick={onStart}
          type="button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img src="/images/start.png" alt="" style={{ width: "32px", height: "32px" }} />
          {t("start")}
        </button>
      )}
      <button
        id="reset-btn"
        className="timer-button"
        onClick={onReset}
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img src="/images/reset.png" alt="" style={{ width: "32px", height: "32px" }} />
        {t("reset")}
      </button>
    </div>
  );
}
