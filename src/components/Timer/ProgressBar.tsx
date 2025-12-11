import React from "react";

interface ProgressBarProps {
	progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
	return (
		<div className="progress-bar-container">
			<div
				id="progress-bar"
				className="progress-bar"
				style={{ height: `${progress}%` }}
			/>
		</div>
	);
}
