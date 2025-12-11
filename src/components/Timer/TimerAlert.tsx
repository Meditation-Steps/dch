import React from "react";
import { useTranslation } from "react-i18next";

interface TimerAlertProps {
	isVisible: boolean;
	onClose: () => void;
}

export default function TimerAlert({ isVisible, onClose }: TimerAlertProps) {
	const { t } = useTranslation("timer");

	if (!isVisible) return null;

	return (
		<div className="timer-alert-overlay" onClick={onClose}>
			<div className="timer-alert" onClick={(e) => e.stopPropagation()}>
				<h2>{t("alert.title")}</h2>
				<p>{t("alert.message")}</p>
				<button
					type="button"
					className="timer-button"
					onClick={onClose}
				>
					OK
				</button>
			</div>
		</div>
	);
}
