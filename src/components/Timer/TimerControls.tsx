import React from "react";
import { useTranslation } from "react-i18next";

interface TimerControlsProps {
	isRunning: boolean;
	onStart: () => void;
	onStop: () => void;
	onReset: () => void;
}

export default function TimerControls({
	isRunning,
	onStart,
	onStop,
	onReset,
}: TimerControlsProps) {
	const { t } = useTranslation("timer");

	return (
		<div className="timer-controls">
			<button
				id="start-btn"
				className="timer-button start"
				onClick={onStart}
				disabled={isRunning}
				type="button"
			>
				{t("controls.start")}
			</button>
			<button
				id="stop-btn"
				className="timer-button stop"
				onClick={onStop}
				disabled={!isRunning}
				type="button"
			>
				{t("controls.stop")}
			</button>
			<button
				id="reset-btn"
				className="timer-button reset"
				onClick={onReset}
				type="button"
			>
				{t("controls.reset")}
			</button>
		</div>
	);
}
