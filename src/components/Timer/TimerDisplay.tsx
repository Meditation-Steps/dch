import React from "react";
import { formatTime } from "../../lib/utils/formatTime";

interface TimerDisplayProps {
	remainingTime: number;
}

export default function TimerDisplay({ remainingTime }: TimerDisplayProps) {
	return (
		<div id="timer-display" className="timer-display">
			{formatTime(remainingTime)}
		</div>
	);
}
