import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTimer } from "../../hooks/useTimer";
import { playNotificationSound } from "../../utils/audio";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import ProgressBar from "./ProgressBar";
import TimerAlert from "./TimerAlert";

interface MeditationTimerProps {
	durationMinutes?: number;
	title?: string;
	subtitle?: string;
}

export default function MeditationTimer({
	durationMinutes = 30,
	title,
	subtitle,
}: MeditationTimerProps) {
	const { t } = useTranslation("timer");
	const [showAlert, setShowAlert] = useState(false);

	const handleComplete = () => {
		playNotificationSound();
		setShowAlert(true);
	};

	const { remainingTime, isRunning, progress, start, stop, reset } = useTimer({
		durationMinutes,
		onComplete: handleComplete,
	});

	return (
		<div className="page-container">
			<header className="page-header">
				<img src="/images/img02.png" alt="Header" />
				<img src="/images/img03.png" alt="Header" />
				<img
					src="/images/img_01.jpg"
					alt="Dharma Wheel"
					style={{ width: "120px" }}
				/>
				<h1 className="page-title">{title || t("title")}</h1>
				<p className="page-subtitle">{subtitle || t("subtitle")}</p>
			</header>

			<main className="timer-container">
				<TimerDisplay remainingTime={remainingTime} />
				<ProgressBar progress={progress} />
				<TimerControls
					isRunning={isRunning}
					onStart={start}
					onStop={stop}
					onReset={reset}
				/>
			</main>

			<TimerAlert isVisible={showAlert} onClose={() => setShowAlert(false)} />
		</div>
	);
}
